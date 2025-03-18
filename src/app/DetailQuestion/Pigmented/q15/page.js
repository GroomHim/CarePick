"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../../../../styles/q1.module.css";

export default function PigmentedQ4() {
  const router = useRouter();
  const question = "피부톤이 얼마나 균일하다고 느끼나요?";
  const options = [
    { label: "전체적으로 균일하다", value: 1 },
    { label: "특정 부위에 약간의 차이가 있지만 신경 쓰이지 않는다", value: 2 },
    { label: "색소침착이나 얼룩덜룩한 부위가 많다고 느낀다", value: 3 },
    { label: "피부톤이 심하게 얼룩덜룩하여 균일하지 않다", value: 4 },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const storedAnswer = localStorage.getItem("Pigmented_Q4");
    if (storedAnswer) {
      setSelectedOption(parseInt(storedAnswer));
    }
  }, []);

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    localStorage.setItem("Pigmented_Q4", value);
  };

  const handleNext = () => {
    router.push("/DetailQuestion/Pigmented/q16");
  };

  const handlePrev = () => {
    router.push("/DetailQuestion/Pigmented/q14");
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
          <span className={styles.currentStep}>15</span> / 20
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
