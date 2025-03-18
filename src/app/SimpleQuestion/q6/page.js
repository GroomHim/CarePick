"use client";
import styles from "@/styles/q1.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Question5() {
  const router = useRouter();
  const question = "다음 중 해당하는 것을 모두 고르세요.";
  const options = [
    { label: "좁쌀 여드름", value: "A" },
    { label: "화농성 여드름", value: "B" },
    { label: "건조한 입술", value: "C" },
    { label: "면도 후 염증", value: "D" },
    { label: "모공", value: "E" },
    { label: "주름", value: "F" },
    { label: "잡티", value: "G" },
    { label: "해당 없음", value: "H" },
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);

  // ✅ 저장된 선택값 불러오기 (localStorage에서 유지)
  useEffect(() => {
    const storedAnswer = localStorage.getItem("Q6");
    if (storedAnswer) {
      setSelectedOptions(JSON.parse(storedAnswer)); // 🔥 기존 선택 유지
    }
  }, []);

  // ✅ 선택 시 `localStorage`에 저장
  const handleOptionClick = (option) => {
    let updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option) // 선택 해제
      : [...selectedOptions, option]; // 선택 추가

    // 🔥 "해당 없음" 선택 시 다른 옵션을 선택 불가
    if (option === "H") {
      updatedOptions = selectedOptions.includes("H") ? [] : ["H"];
    } else {
      updatedOptions = selectedOptions.includes("H")
        ? [option] // "해당 없음"이 선택된 경우, 다른 옵션 선택하면 초기화
        : updatedOptions;
    }

    setSelectedOptions(updatedOptions);
    localStorage.setItem("Q6", JSON.stringify(updatedOptions)); // 🔥 선택값 저장
  };

  // ✅ "다음" 버튼 클릭 시 점수 계산 및 결과 저장
  const handleNext = () => {
    // ✅ 1. 모든 질문의 점수를 가져오기
    const q1 = parseInt(localStorage.getItem("Q1")) || 0;
    const q2 = parseInt(localStorage.getItem("Q2")) || 0;
    const q3 = localStorage.getItem("Q3")
      ? JSON.parse(localStorage.getItem("Q3")).length
      : 0;
    const q4 = localStorage.getItem("Q4")
      ? JSON.parse(localStorage.getItem("Q4")).length
      : 0;
    const q5 = parseInt(localStorage.getItem("Q5")) || 0;

    // ✅ 2. 피부 타입 결정 (Q1 + Q2 합산)
    const totalSkinScore = q1 + q2;
    let skinType = "";
    if (totalSkinScore >= 2 && totalSkinScore <= 4) {
      skinType = "Dry";
    } else if (totalSkinScore >= 5 && totalSkinScore <= 7) {
      skinType = "Neutral";
    } else if (totalSkinScore >= 8 && totalSkinScore <= 10) {
      skinType = "Oily";
    }

    // ✅ 3. 예민도 결정 (Q3 선택 개수 기준)
    const sensitiveSkin = q3 >= 3 ? "Sensitive" : "Resistant";

    // ✅ 4. 착색도 결정 (Q4 선택 개수 기준)
    const pigmentedSkin = q4 >= 3 ? "Pigmented" : "Non-Pigmented";

    // ✅ 5. 피부 고민 저장
    localStorage.setItem("skinConcerns", JSON.stringify(selectedOptions));

    // ✅ 6. 결과 저장
    localStorage.setItem("totalSkinScore", totalSkinScore);
    localStorage.setItem("skinType", skinType);
    localStorage.setItem("sensitiveSkin", sensitiveSkin);
    localStorage.setItem("pigmentedSkin", pigmentedSkin);

    console.log(
      `🚀 피부 타입: ${skinType}, 예민도: ${sensitiveSkin}, 착색도: ${pigmentedSkin}`
    );
    console.log(`📝 선택한 피부 고민:`, selectedOptions);

    // ✅ 7. 로딩 화면으로 이동
    router.push("/loading");
  };

  const handlePrev = () => {
    router.push("/SimpleQuestion/q5"); // ✅ 4번째 질문으로 이동
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

      {/* 질문 박스 */}
      <div className={styles.questionBox}>{`Q. ${question}`}</div>

      {/* 설문 선택 박스 */}
      <div className={styles.surveyBox}>
        <div className={styles.progress}>
          <span className={styles.currentStep}>6</span> / 6
        </div>

        {/* 2열 버튼 그리드 배치 */}
        <div className={styles.optionsGrid}>
          {options.map((option, index) => (
            <button
              key={index}
              className={`${styles.option} ${
                selectedOptions.includes(option.value) ? styles.selected : ""
              }`}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* 이전 / 다음 버튼 */}
        <div className={styles.buttonContainer}>
          <button className={styles.prevButton} onClick={handlePrev}>
            이전
          </button>
          <button
            className={styles.nextButton}
            onClick={handleNext}
            disabled={selectedOptions.length === 0}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
