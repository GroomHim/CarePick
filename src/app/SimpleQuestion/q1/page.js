"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../../../styles/q1.module.css";

export default function SurveyQuestion() {
  const router = useRouter();
  const questions = ["비누로 세수해도 당김이 없나요?"];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  // 선택 옵션과 점수 매핑
  const options = [
    { label: "전혀 아니다", value: 1 },
    { label: "아닌 쪽에 가깝다", value: 2 },
    { label: "그저 그렇다", value: 3 },
    { label: "그런 편이다", value: 4 },
    { label: "매우 그렇다", value: 5 },
  ];
  // 저장된 선택값 불러오기
  useEffect(() => {
    const storedAnswer = localStorage.getItem("Q1");
    if (storedAnswer) {
      setSelectedOption(parseInt(storedAnswer)); // 기존 선택 유지
    }
  }, []);

  // 선택값을 `localStorage`에 저장
  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    localStorage.setItem("Q1", value); // 점수를 localStorage에 저장
  };

  // 다음 질문으로 이동
  const handleNext = () => {
    router.push("/SimpleQuestion/q2"); // 완료 후 메인 화면으로 이동
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
          <span className={styles.currentStep}>1</span> / 6
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
