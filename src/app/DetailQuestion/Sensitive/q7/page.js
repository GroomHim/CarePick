"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../../../../styles/q1.module.css";

export default function SensitiveQ2() {
  const router = useRouter();
  const question = "화장품을 바르고 나서 따갑거나 가려운 적이 있었나요?";
  const options = [
    { label: "전혀 없다", value: 1 },
    { label: "가끔 있다", value: 2 },
    { label: "자주 있다", value: 3 },
    { label: "거의 항상 그렇다", value: 4 },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const storedAnswer = localStorage.getItem("Sensitive_Q2");
    if (storedAnswer) {
      setSelectedOption(parseInt(storedAnswer));
    }
  }, []);

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    localStorage.setItem("Sensitive_Q2", value);
  };

  const handleNext = () => {
    router.push("/DetailQuestion/Sensitive/q8");
  };

  const handlePrev = () => {
    router.push("/DetailQuestion/Sensitive/q6");
  };

  return (
    <div className={styles.container}>
      <img src="/logo.svg" alt="Logo" width="199" height="30" style={{ display: "block", margin: "30px auto" }}/>
      <div className={styles.questionBox}>{`Q. ${question}`}</div>

      <div className={styles.surveyBox}>
        <div className={styles.progress}>
          <span className={styles.currentStep}>7</span> / 20
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
