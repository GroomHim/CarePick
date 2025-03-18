"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../../../../styles/q1.module.css";

export default function SurveyQuestion() {
  const router = useRouter();
  const question = "여행할 때 피부 상태가 달라지는 걸 느낀 적이 있나요?";

  const options = [
    { label: "평소보다 건조해진다.", value: -1 },
    { label: "평소보다 기름져진다.", value: 1 },
    { label: "변화 없다.", value: 0 },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  // 저장된 선택값 불러오기 (localStorage에서 유지)
  useEffect(() => {
    const storedAnswer = localStorage.getItem("Q5");
    if (storedAnswer) {
      setSelectedOption(parseInt(storedAnswer)); // 기존 선택 유지
    }
  }, []);

  // 선택 시 `localStorage`에 저장
  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    localStorage.setItem("Q5", value); // 점수를 localStorage에 저장
  };

  const handleNext = () => {
    // 1. 모든 질문의 점수를 가져오기
    const q1 = parseInt(localStorage.getItem("Q1")) || 0;
    const q2 = parseInt(localStorage.getItem("Q2")) || 0;
    const q3 = parseInt(localStorage.getItem("Q3")) || 0;
    const q4 = parseInt(localStorage.getItem("Q4")) || 0;
    const q5 = parseInt(localStorage.getItem("Q5")) || 0;

    // 2. 총점 계산
    const totalScore = q1 + q2 + q3 + q4 + q5;

    // 3. 피부 타입 결정
    let skinType = "";
    if (totalScore >= 1 && totalScore <= 7) {
      skinType = "Dry";
    } else if (totalScore >= 8 && totalScore <= 12) {
      skinType = "Neutral";
    } else if (totalScore >= 13 && totalScore <= 19) {
      skinType = "Oily";
    }

    // 4. 결과를 `localStorage`에 저장
    localStorage.setItem("totalScore", totalScore);
    localStorage.setItem("skinType", skinType);
    console.log(skinType, totalScore);

    // 5. 로딩 화면으로 이동
    router.push("/DetailQuestion/Sensitive/q6");
  };

  // 이전 질문으로 이동
  const handlePrev = () => {
    router.push("/DetailQuestion/Oily/q4");
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

      {/* 질문 박스 */}
      <div className={styles.questionBox}>{`Q. ${question}`}</div>

      {/* 설문 선택 박스 */}
      <div className={styles.surveyBox}>
        <div className={styles.progress}>
          <span className={styles.currentStep}>5</span> / 20
        </div>

        {/* 옵션 선택 (단일 선택) */}
        {options.map((option) => (
          <button
            key={option.value}
            className={`${styles.option} ${
              selectedOption === option.value ? styles.selected : ""
            }`}
            onClick={() => handleOptionSelect(option.value)}
          >
            {option.label}
          </button>
        ))}

        {/* 이전 / 다음 버튼 */}
        <div className={styles.buttonContainer}>
          <button className={styles.prevButton} onClick={handlePrev}>
            이전
          </button>
          <button
            className={styles.nextButton}
            onClick={handleNext}
            disabled={selectedOption === null} // 선택하지 않으면 "다음" 버튼 비활성화
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
