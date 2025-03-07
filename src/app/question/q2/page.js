"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../../../styles/q1.module.css";

export default function SurveyQuestion() {
  const router = useRouter();
  const questions = ["다음 중 해당하는 것을 모두 고르세요."];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    "어떤 운동이든 운동 후 피부가 붉어지는 편이다",
    "화장품을 바르고 가렵거나 따가운적이 있다.",
    "아토피나 금속, 햇빛 알러지를 앓은 적이 있다.",
    "얼굴 피부 중에서도 핏줄이 보이는 곳이 있다.",
    "해당 없음",
  ];

  // 다음 질문으로 이동
  const handleNext = () => {
    router.push("/question/q3"); // 완료 후 메인 화면으로 이동
  };

  // 이전 질문으로 이동
  const handlePrev = () => {
    router.push("/question/q1"); // 첫 번째 질문이면 홈으로 이동
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
          <span className={styles.currentStep}>2</span> / 5
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
