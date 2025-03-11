"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../../../styles/q1.module.css";

export default function SurveyQuestion() {
  const router = useRouter();
  const question = "얼굴의 모공 상태와 가장 가까운 표현은?";
  const options = [
    "가까이서 보면 작게 보이지만, 멀리서는 거의 안 보인다.",
    "코와 볼 주변에 약간의 모공이 보인다.",
    "코와 볼 주변에 모공이 뚜렷하게 보이고, 피부가 거칠다.",
    "얼굴 전체적으로 모공이 넓거나 깊게 보인다.",
  ];

  const [selectedOptions, setSelectedOptions] = useState([]); // 다중 선택 가능하도록 배열로 변경

  // ✅ 옵션 선택 / 해제 (토글 방식)
  const handleOptionClick = (option) => {
    setSelectedOptions(option);
  };

  // ✅ 다음 질문으로 이동
  const handleNext = () => {
    router.push("/DetailQuestion/q4");
  };

  // ✅ 이전 질문으로 이동
  const handlePrev = () => {
    router.push("/DetailQuestion/q2");
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
          <span className={styles.currentStep}>3</span> / 5
        </div>

        {/* 옵션 선택 (단일 선택) */}
        {options.map((option, index) => (
          <button
            key={index}
            className={`${styles.option} ${
              selectedOptions === option ? styles.selected : ""
            }`}
            onClick={() => handleOptionClick(option)}
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
            disabled={selectedOptions.length === 0} //하나 이상 선택해야 "다음" 버튼 활성화
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
