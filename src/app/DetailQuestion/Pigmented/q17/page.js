"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../../../../styles/q1.module.css";

export default function PigmentedQ6() {
  const router = useRouter();
  const question =
    "나는 얼굴 외에도 손, 목, 팔 등에 색소침착(잡티, 기미 등)이 잘 생기는 편이다.";
  const options = [
    { label: "전혀 생기지 않는다", value: 1 },
    { label: "가끔 생기지만 금방 사라진다", value: 2 },
    { label: "쉽게 생기지만 시간이 지나면 조금 흐려진다", value: 3 },
    { label: "쉽게 생기고 오랫동안 남아 있다", value: 4 },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const storedAnswer = localStorage.getItem("Pigmented_Q6");
    if (storedAnswer) {
      setSelectedOption(parseInt(storedAnswer));
    }
  }, []);

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    localStorage.setItem("Pigmented_Q6", value);
  };

  const handleNext = () => {
    // 1. 모든 질문의 점수를 가져오기
    let totalPigmentedScore = 0;
    for (let i = 1; i <= 6; i++) {
      totalPigmentedScore +=
        parseInt(localStorage.getItem(`Pigmented_Q${i}`)) || 0;
    }

    // 2. 착색도 판별
    const pigmentedSkin =
      totalPigmentedScore >= 14 ? "Pigmented" : "Non-Pigmented";

    // 3. 결과를 `localStorage`에 저장
    localStorage.setItem("totalPigmentedScore", totalPigmentedScore);
    localStorage.setItem("pigmentedSkin", pigmentedSkin);
    console.log(
      `색소침착 점수: ${totalPigmentedScore}, 색소침착 유형: ${pigmentedSkin}`
    );

    // 4. 최종 결과 페이지로 이동
    router.push("/DetailQuestion/Final/q18");
  };

  const handlePrev = () => {
    router.push("/DetailQuestion/Pigmented/q16");
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
      <div className={`${styles.questionBox} ${styles.longQuestion}`}>
        {`Q. ${question}`}
      </div>

      <div className={styles.surveyBox}>
        <div className={styles.progress}>
          <span className={styles.currentStep}>17</span> / 20
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
