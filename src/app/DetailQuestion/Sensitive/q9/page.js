"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../../../../styles/q1.module.css";

export default function SensitiveQ4() {
  const router = useRouter();
  const question = "얼굴 피부 중에 핏줄이 보이는 정도는?";
  const options = [
    { label: "전혀 없다", value: 1 },
    { label: "가까이서 보면 1~2군데 보인다", value: 2 },
    { label: "멀리서 봐도 볼과 코 주변에서 보인다", value: 3 },
    { label: "얼굴 전체적으로 핏줄이 잘 보인다", value: 4 },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const storedAnswer = localStorage.getItem("Sensitive_Q4");
    if (storedAnswer) {
      setSelectedOption(parseInt(storedAnswer));
    }
  }, []);

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    localStorage.setItem("Sensitive_Q4", value);
  };

  const handleNext = () => {
    router.push("/DetailQuestion/Sensitive/q10");
  };

  const handlePrev = () => {
    router.push("/DetailQuestion/Sensitive/q8");
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
          <span className={styles.currentStep}>9</span> / 20
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
