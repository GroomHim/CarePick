"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../../../../styles/q1.module.css";

export default function FinalQ2() {
  const router = useRouter();
  const question = "나의 야외 활동 정도는?";
  const options = [
    { label: "활동 대부분을 바깥에서 진행 (운동, 노동)", value: "high" },
    { label: "절반 정도를 바깥에서 진행", value: "medium" },
    { label: "이동 시간 외에는 실내에서 진행", value: "low" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const storedAnswer = localStorage.getItem("Final_Q2");
    if (storedAnswer) {
      setSelectedOption(storedAnswer);
    }
  }, []);

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    localStorage.setItem("Final_Q2", value);
  };

  const handleNext = () => {
    router.push("/DetailQuestion/Final/q20");
  };

  const handlePrev = () => {
    router.push("/DetailQuestion/Final/q18");
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
          <span className={styles.currentStep}>19</span> / 20
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
