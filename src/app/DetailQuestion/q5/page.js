"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../../../styles/q1.module.css";

export default function SurveyQuestion() {
  const router = useRouter();
  const questions = ["여행할 때 피부 상태가 달라지는 걸 느낀 적이 있나요?"];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    "평소보다 건조해진다.",
    "평소보다 기름져진다.",
    "변화 없다.",
  ];

  // 다음 질문으로 이동
  const handleNext = () => {
    router.push("/loading"); // 완료 후 메인 화면으로 이동
  };

  // 이전 질문으로 이동
  const handlePrev = () => {
    router.push("/DetailQuestion/q4"); // 첫 번째 질문이면 홈으로 이동
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
      <div
        className={styles.questionBox}
      >{`Q. ${questions[currentQuestion]}`}</div>

      {/* 설문 선택 박스 */}
      <div className={styles.surveyBox}>
        <div className={styles.progress}>
          <span className={styles.currentStep}>5</span> / 6
        </div>

        {/* 옵션 선택 */}
        {options.map((option, index) => (
          <button
            key={index}
            className={`${styles.option} ${
              selectedOption === option ? styles.selected : ""
            }`}
            onClick={() => setSelectedOption(option)}
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
            disabled={!selectedOption}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
