"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../../../../styles/q1.module.css";

export default function PigmentedQ2() {
  const router = useRouter();
  const question = "여드름 자국은 시간에 따라 어떻게 변하나요?";
  const options = [
    { label: "원래 피부색으로 돌아온다", value: 1 },
    { label: "몇 주 내에 사라진다", value: 2 },
    { label: "갈색으로 변하지만 점차 흐려진다", value: 3 },
    { label: "갈색으로 변해서 오래 지속된다", value: 4 },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const storedAnswer = localStorage.getItem("Pigmented_Q2");
    if (storedAnswer) {
      setSelectedOption(parseInt(storedAnswer));
    }
  }, []);

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    localStorage.setItem("Pigmented_Q2", value);
  };

  const handleNext = () => {
    router.push("/DetailQuestion/Pigmented/q14");
  };

  const handlePrev = () => {
    router.push("/DetailQuestion/Pigmented/q12");
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
          <span className={styles.currentStep}>13</span> / 20
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
