"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../../../../styles/q1.module.css";

export default function PigmentedQ1() {
  const router = useRouter();
  const question = "햇빛에 타면 피부가 어떻게 변하나요?";
  const options = [
    { label: "빨개졌다가 원래대로 돌아온다", value: 1 },
    { label: "빨개졌다가 갈색으로 변한 후 돌아온다", value: 2 },
    { label: "어두워진 후 오랜 시간이 지나야 돌아온다", value: 3 },
    { label: "까매진다", value: 4 },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const storedAnswer = localStorage.getItem("Pigmented_Q1");
    if (storedAnswer) {
      setSelectedOption(parseInt(storedAnswer));
    }
  }, []);

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    localStorage.setItem("Pigmented_Q1", value);
  };

  const handleNext = () => {
    router.push("/DetailQuestion/Pigmented/q13");
  };

  const handlePrev = () => {
    router.push("/DetailQuestion/Sensitive/q11");
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
      <div className={styles.questionBox}>{`Q. ${question}`}</div>
      <div className={styles.surveyBox}>
        <div className={styles.progress}>
          <span className={styles.currentStep}>12</span> / 20
        </div>
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
