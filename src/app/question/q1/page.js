"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../../../styles/q1.module.css";

export default function SurveyQuestion() {
  const router = useRouter();
  const questions = ["비누로 세수해도 당김이 없나요?"];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    "전혀 아니다",
    "아닌 쪽에 가깝다",
    "그저 그렇다",
    "그런 편이다",
    "매우 그렇다",
  ];
  // 다음 질문으로 이동
  const handleNext = () => {
    router.push("/question/q2"); // 완료 후 메인 화면으로 이동
  };

  // 이전 질문으로 이동
  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null); // 이전 질문으로 이동하면 선택 초기화
    } else {
      router.push("/"); // 첫 번째 질문이면 홈으로 이동
    }
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
          <span className={styles.currentStep}>1</span> / 5
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
