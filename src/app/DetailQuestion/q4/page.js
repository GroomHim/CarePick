"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../../../styles/q1.module.css";

export default function SurveyQuestion() {
  const router = useRouter();
  const question = "하루 평균 스킨케어 제품을 바르는 횟수는?";
  const options = [
    "전혀 사용하지 않는다.",
    "하루 1회 사용한다.",
    "하루 2~3회 사용한다.",
    "하루 4회 이상 사용한다.",
  ];

  const [selectedOptions, setSelectedOptions] = useState([]); // ✅ 다중 선택 가능하도록 배열로 변경

  /// 옵션 선택 (토글 방식)
  const handleOptionClick = (option) => {
    setSelectedOptions(option);
  };

  // 다음 질문으로 이동
  const handleNext = () => {
    router.push("/DetailQuestion/q5"); // ✅ 4번째 질문으로 이동
  };

  // 이전 질문으로 이동
  const handlePrev = () => {
    router.push("/DetailQuestion/q3"); // ✅ 2번째 질문으로 이동
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
          <span className={styles.currentStep}>4</span> / 5
        </div>

        {/* 옵션 선택 (다중 선택 가능) */}
        {options.map((option, index) => (
          <button
            key={index}
            className={`${styles.option} ${
              selectedOptions.includes(option) ? styles.selected : ""
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
            disabled={selectedOptions.length === 0} // ✅ 하나 이상 선택해야 활성화
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
