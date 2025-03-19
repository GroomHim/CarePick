"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../../../styles/q1.module.css";

export default function SurveyQuestion() {
  const router = useRouter();
  const question = "다음 중 해당하는 것을 모두 고르세요.";
  const options = [
    "어떤 운동이든 운동 후 피부가 붉어지는 편이다.",
    "화장품을 바르고 가렵거나 따가운적이 있다.",
    "아토피나 금속, 햇빛 알러지를 앓은 적이 있다.",
    "얼굴 피부 중에서도 핏줄이 보이는 곳이 있다.",
    "해당 없음",
  ];

  const [selectedOptions, setSelectedOptions] = useState([]); // 다중 선택 가능하도록 배열로 변경

  // 저장된 선택값 불러오기 (localStorage에서 유지)
  useEffect(() => {
    try {
      const storedValue = localStorage.getItem("Q3");
      const storedAnswer = storedValue ? JSON.parse(storedValue) : [];
      setSelectedOptions(Array.isArray(storedAnswer) ? storedAnswer : []);
    } catch (error) {
      console.error("localStorage 데이터 파싱 오류:", error);
      setSelectedOptions([]);
    }
  }, []);

  // 선택 시 `localStorage`에 저장
  const handleOptionClick = (option) => {
    let newSelection = [];

    if (option === "해당 없음") {
      // "해당 없음"을 선택하면 다른 옵션을 모두 해제하고 해당 없음만 선택
      newSelection = selectedOptions.includes(option) ? [] : [option];
    } else {
      // 다른 옵션을 선택하면 "해당 없음"이 자동으로 해제됨
      newSelection = selectedOptions.includes("해당 없음")
        ? [option] // "해당 없음" 선택 중이면, 새 옵션만 유지
        : selectedOptions.includes(option)
        ? selectedOptions.filter((item) => item !== option) // 선택 해제
        : [...selectedOptions, option]; // 선택 추가
    }

    setSelectedOptions(newSelection);
    localStorage.setItem("Q3", JSON.stringify(newSelection));
  };

  // 예민도 점수 계산 후 저장
  const handleNext = () => {
    let sensitivityScore = 0;

    if (selectedOptions.includes("해당 없음") || selectedOptions.length <= 2) {
      sensitivityScore = 0; // 예민X
    } else {
      sensitivityScore = 1; // 예민O
    }

    localStorage.setItem("sensitivity", sensitivityScore);
    console.log("예민도:", sensitivityScore);

    router.push("/SimpleQuestion/q4");
  };

  // 이전 질문으로 이동
  const handlePrev = () => {
    router.push("/SimpleQuestion/q2");
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
          <span className={styles.currentStep}>3</span> / 6
        </div>

        {/* 옵션 선택 (다중 선택 가능, 선택 해제 가능) */}
        {options.map((option, index) => (
          <button
            key={index}
            className={`${styles.option} ${
              selectedOptions.includes(option) ? styles.selected : ""
            }`}
            onClick={() => handleOptionClick(option)}
            disabled={
              selectedOptions.includes("해당 없음") && option !== "해당 없음"
            }
          >
            {option}
          </button>
        ))}

        {/* 이전 / 다음 버튼 */}
        <div className={styles.buttonContainer}>
          <button className={styles.prevButton} onClick={handlePrev}>
            이전
          </button>
          <button
            className={styles.nextButton}
            onClick={handleNext}
            disabled={selectedOptions.length === 0} // 하나 이상 선택해야 "다음" 버튼 활성화
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
