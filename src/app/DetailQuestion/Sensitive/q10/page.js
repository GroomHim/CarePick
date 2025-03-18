"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../../../../styles/q1.module.css";

export default function SensitiveQ5() {
  const router = useRouter();
  const question = "스트레스를 받으면 피부가 어떻게 변하나요?";
  const options = [
    { label: "전혀 변화 없다", value: 1 },
    { label: "가끔 붉어지거나 트러블이 난다", value: 2 },
    { label: "스트레스가 심하면 여드름이나 피부 염증이 심해진다", value: 3 },
    { label: "스트레스를 받을 때마다 피부 상태가 급격히 악화된다", value: 4 },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const storedAnswer = localStorage.getItem("Sensitive_Q5");
    if (storedAnswer) {
      setSelectedOption(parseInt(storedAnswer));
    }
  }, []);

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    localStorage.setItem("Sensitive_Q5", value);
  };

  const handleNext = () => {
    router.push("/DetailQuestion/Sensitive/q11");
  };

  const handlePrev = () => {
    router.push("/DetailQuestion/Sensitive/q9");
  };

  return (
    <div className={styles.container}>
      <img src="/logo.svg" alt="Logo" width="199" height="30" style={{ display: "block", margin: "30px auto" }}/>
      <div className={styles.questionBox}>{`Q. ${question}`}</div>

      <div className={styles.surveyBox}>
        <div className={styles.progress}>
          <span className={styles.currentStep}>10</span> / 20
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
