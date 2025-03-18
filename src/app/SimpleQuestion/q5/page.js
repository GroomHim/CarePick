"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../../../styles/q1.module.css";

export default function SurveyQuestion() {
  const router = useRouter();
  const questions = ["나의 야외 활동 정도는?"];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  //야외활동 점수는 피부 타입 계산에는 포함되지 않지만 저장은 함.
  const options = [
    { label: "활동 대부분을 바깥에서 진행 (운동, 노동)", value: 3 },
    { label: "절반 정도를 바깥에서 진행", value: 2 },
    { label: "이동시간 외에는 실내에서 진행", value: 1 },
  ];
  // ✅ 저장된 선택값 불러오기 (localStorage에서 유지)
  useEffect(() => {
    const storedAnswer = localStorage.getItem("Q5");
    if (storedAnswer) {
      setSelectedOption(parseInt(storedAnswer)); // 🔥 기존 선택 유지
    }
  }, []);

  // ✅ 선택 시 `localStorage`에 저장
  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    localStorage.setItem("Q5", value); // 🔥 선택값 저장
  };

  // ✅ 다음 질문으로 이동
  const handleNext = () => {
    console.log("야외 활동 정도:", selectedOption);
    router.push("/SimpleQuestion/q6");
  };
  // 이전 질문으로 이동
  const handlePrev = () => {
    router.push("/SimpleQuestion/q4"); // 첫 번째 질문이면 홈으로 이동
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
              selectedOption === option.value ? styles.selected : ""
            }`}
            onClick={() => handleOptionSelect(option.value)}
          >
            {option.label}
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
