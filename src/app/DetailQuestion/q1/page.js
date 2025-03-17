"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../../../styles/q1.module.css";

export default function SurveyQuestion() {
  const router = useRouter();
  const question =
    "세안 후 아무것도 바르지 않고 2~3시간 후, 피부가 어떻게 느껴지나요?";
  const options = [
    { label: "당김이 심하다", value: 1 },
    { label: "약간 당긴다", value: 2 },
    { label: "보통이다", value: 3 },
    { label: "약간 기름지다", value: 4 },
    { label: "피부가 많이 번들거린다", value: 5 },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  // ✅ 저장된 선택값 불러오기
  useEffect(() => {
    const storedAnswer = localStorage.getItem("Q1");
    if (storedAnswer) {
      setSelectedOption(parseInt(storedAnswer));
    }
  }, []);

  // ✅ 선택값을 `localStorage`에 저장
  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    localStorage.setItem("Q1", value);
  };

  // ✅ 다음 질문으로 이동
  const handleNext = () => {
    router.push("/DetailQuestion/q2");
  };

  // ✅ 이전 질문으로 이동
  const handlePrev = () => {
    router.push("/");
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
          <span className={styles.currentStep}>1</span> / 5
        </div>

        {/* 옵션 선택 */}
        {options.map((option) => (
          <button
            key={option.value}
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
            disabled={selectedOption === null}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
