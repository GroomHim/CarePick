"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../../../../styles/q1.module.css";

export default function PigmentedQ5() {
  const router = useRouter();
  const question = "미백 제품을 사용하시나요?";
  const options = [
    { label: "필요하지 않다", value: -2 },
    { label: "가끔 사용하지만 중요하지 않다", value: 0 },
    { label: "미백 제품을 적극적으로 사용하고 싶다", value: 2 },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const storedAnswer = localStorage.getItem("Pigmented_Q5");
    if (storedAnswer) {
      setSelectedOption(parseInt(storedAnswer));
    }
  }, []);

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    localStorage.setItem("Pigmented_Q5", value);
  };

  const handleNext = () => {
    router.push("/DetailQuestion/Pigmented/q17");
  };

  const handlePrev = () => {
    router.push("/DetailQuestion/Pigmented/q15");
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
          <span className={styles.currentStep}>16</span> / 20
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
