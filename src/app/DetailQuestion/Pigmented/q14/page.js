"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../../../../styles/q1.module.css";

export default function PigmentedQ3() {
  const router = useRouter();
  const question = "햇빛을 받으면 주근깨가 생기나요?";
  const options = [
    { label: "전혀 생기지 않는다", value: 1 },
    { label: "가끔 생기지만 쉽게 사라진다", value: 2 },
    { label: "햇빛을 받으면 생기고 없어지는 데 시간이 오래 걸린다", value: 3 },
    { label: "주근깨가 쉽게 생기고 오랫동안 남아 있다", value: 4 },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const storedAnswer = localStorage.getItem("Pigmented_Q3");
    if (storedAnswer) {
      setSelectedOption(parseInt(storedAnswer));
    }
  }, []);

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    localStorage.setItem("Pigmented_Q3", value);
  };

  const handleNext = () => {
    router.push("/DetailQuestion/Pigmented/q15");
  };

  const handlePrev = () => {
    router.push("/DetailQuestion/Pigmented/q13");
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
          <span className={styles.currentStep}>14</span> / 20
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
