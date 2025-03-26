"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../../../../styles/q1.module.css";

export default function FinalQ3() {
  const router = useRouter();
  const question = "내가 선호하는 화장품 제형은?";
  const options = [
    { label: "가볍게 발리는 크림", value: "light_cream" },
    { label: "묵직하고 보습감 느껴지는 크림", value: "heavy_cream" },
    { label: "세럼", value: "serum" },
    { label: "앰플", value: "ampoule" },
    { label: "스팟 크림", value: "spot_cream" },
    { label: "고체 밤", value: "balm" },
    { label: "워터, 토너", value: "toner" },
    { label: "오일", value: "oil" },
    { label: "특정 선호 없음", value: "no_preference" },
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    const storedAnswer = JSON.parse(localStorage.getItem("Final_Q3")) || [];
    setSelectedOptions(storedAnswer);
  }, []);

  const handleOptionClick = (value) => {
    const updatedOptions = selectedOptions.includes(value)
      ? selectedOptions.filter((item) => item !== value)
      : [...selectedOptions, value];

    setSelectedOptions(updatedOptions);
    localStorage.setItem("Final_Q3", JSON.stringify(updatedOptions));
  };

  const handleNext = () => {
    // 1. 건성/중성/지성 구분 (Q1~Q5 점수 기반)
    const totalSkinScore = parseInt(localStorage.getItem("totalScore")) || 0;
    let skinType = "";
    if (totalSkinScore >= 1 && totalSkinScore <= 7) {
      skinType = "Dry";
    } else if (totalSkinScore >= 8 && totalSkinScore <= 12) {
      skinType = "Neutral";
    } else if (totalSkinScore >= 13 && totalSkinScore <= 19) {
      skinType = "Oily";
    }

    // 2. 예민도 판별 (Q6~Q11 점수 기반)
    const totalSensitiveScore =
      parseInt(localStorage.getItem("totalSensitiveScore")) || 0;
    const sensitiveSkin = totalSensitiveScore >= 16 ? "Sensitive" : "Resistant";

    // 3. 착색도 판별 (Q12~Q17 점수 기반)
    const totalPigmentedScore =
      parseInt(localStorage.getItem("totalPigmentedScore")) || 0;
    const pigmentedSkin =
      totalPigmentedScore >= 14 ? "Pigmented" : "Non-Pigmented";

    // 4. 최종 피부 타입 조합
    const finalSkinType = `${skinType} - ${sensitiveSkin} - ${pigmentedSkin}`;

    // 5. 최종 피부 타입 매칭 (1~12번)
    const skinTypeMap = {
      "Oily - Sensitive - Pigmented": "지성 1번",
      "Oily - Resistant - Pigmented": "지성 2번",
      "Oily - Sensitive - Non-Pigmented": "지성 3번",
      "Oily - Resistant - Non-Pigmented": "지성 4번",
      "Neutral - Sensitive - Pigmented": "중성 1번",
      "Neutral - Resistant - Pigmented": "중성 2번",
      "Neutral - Sensitive - Non-Pigmented": "중성 3번",
      "Neutral - Resistant - Non-Pigmented": "중성 4번",
      "Dry - Sensitive - Pigmented": "건성 1번",
      "Dry - Resistant - Pigmented": "건성 2번",
      "Dry - Sensitive - Non-Pigmented": "건성 3번",
      "Dry - Resistant - Non-Pigmented": "건성 4번",
    };

    const finalResult = skinTypeMap[finalSkinType];

    // 6. 최종 결과를 localStorage에 저장
    localStorage.setItem("finalSkinType", finalResult);

    // 7. 콘솔에 최종 피부 타입 출력
    console.log(`최종 피부 타입: ${finalSkinType}`);
    console.log(`피부 타입: ${skinType}`);
    console.log(`예민도: ${sensitiveSkin}`);
    console.log(`착색도: ${pigmentedSkin}`);

    router.push("/loading");
  };

  const handlePrev = () => {
    router.push("/DetailQuestion/Final/q19");
  };

  return (
    <div className={styles.container}>
      <img
        src="/logo.svg"
        alt="Logo"
        width="199"
        height="30"
        style={{ display: "block", margin: "30px auto" }}
      />
      <div className={styles.questionBox}>{`Q. ${question}`}</div>

      <div className={styles.surveyBox}>
        <div className={styles.progress}>
          <span className={styles.currentStep}>20</span> / 20
        </div>

        <div className={styles.optionsGridFinal}>
          {options.map((option, index) => (
            <button
              key={index}
              className={`${styles.option} ${
                selectedOptions.includes(option.value) ? styles.selected : ""
              }`}
              onClick={() => handleOptionClick(option.value)}
            >
              <span>{option.label}</span>
            </button>
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.prevButton} onClick={handlePrev}>
            이전
          </button>
          <button className={styles.nextButton} onClick={handleNext}>
            결과 보기
          </button>
        </div>
      </div>
    </div>
  );
}
