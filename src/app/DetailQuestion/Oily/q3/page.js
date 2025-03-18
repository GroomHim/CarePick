"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../../../../styles/q1.module.css";

export default function SurveyQuestion() {
  const router = useRouter();
  const question = "얼굴의 모공 상태와 가장 가까운 표현은?";
  const options = [
    {
      label: "가까이서 보면 작게 보이지만, 멀리서는 거의 안 보인다.",
      value: 1,
    },
    { label: "코와 볼 주변에 약간의 모공이 보인다.", value: 3 },
    {
      label: "코와 볼 주변에 모공이 뚜렷하게 보이고, 피부가 거칠다.",
      value: 4,
    },
    { label: "얼굴 전체적으로 모공이 넓거나 깊게 보인다.", value: 5 },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  // ✅ 저장된 선택값 불러오기 (localStorage에서 유지)
  useEffect(() => {
    const storedAnswer = localStorage.getItem("Q3");
    if (storedAnswer) {
      setSelectedOption(parseInt(storedAnswer)); // 🔥 기존 선택 유지
    }
  }, []);

  // ✅ 선택 시 `localStorage`에 저장
  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    localStorage.setItem("Q3", value); // 🔥 점수를 localStorage에 저장
  };

  // ✅ 다음 질문으로 이동
  const handleNext = () => {
    router.push("/DetailQuestion/Oily/q4");
  };

  // ✅ 이전 질문으로 이동
  const handlePrev = () => {
    router.push("/DetailQuestion/Oily/q2");
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
          <span className={styles.currentStep}>3</span> / 20
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
            disabled={selectedOption === null} // 🔥 선택하지 않으면 "다음" 버튼 비활성화
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
