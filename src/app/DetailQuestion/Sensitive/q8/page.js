"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../../../../styles/q1.module.css";

export default function SensitiveQ3() {
  const router = useRouter();
  const question = "특정 성분(향료, 알코올, 오일 등)에 알러지 반응이 있나요?";
  const options = [
    { label: "전혀 없다", value: 1 },
    { label: "화장품 성분이 아니더라도 알러지가 있다", value: 2 },
    { label: "특정 성분이 포함되면 반응이 심하다", value: 3 },
    { label: "거의 모든 제품에서 반응이 있다", value: 4 },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const storedAnswer = localStorage.getItem("Sensitive_Q3");
    if (storedAnswer) {
      setSelectedOption(parseInt(storedAnswer));
    }
  }, []);

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    localStorage.setItem("Sensitive_Q3", value);
  };

  const handleNext = () => {
    router.push("/DetailQuestion/Sensitive/q9");
  };

  const handlePrev = () => {
    router.push("/DetailQuestion/Sensitive/q7");
  };

  return (
    <div className={styles.container}>
      <img src="/logo.svg" alt="Logo" width="199" height="30" style={{ display: "block", margin: "30px auto" }}/>
      <div className={styles.questionBox}>{`Q. ${question}`}</div>

      <div className={styles.surveyBox}>
        <div className={styles.progress}>
          <span className={styles.currentStep}>8</span> / 20
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
