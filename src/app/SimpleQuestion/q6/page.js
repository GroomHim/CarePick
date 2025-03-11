"use client";
import styles from "@/styles/q1.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Question5() {
  const router = useRouter();
  const question = "다음 중 해당하는 것을 모두 고르세요.";
  const options = [
    "좁쌀 여드름",
    "화농성 여드름",
    "건조한 입술",
    "면도 후 염증",
    "모공",
    "주름",
    "잡티",
    "해당 없음",
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (option) => {
    setSelectedOptions(
      (prevSelected) =>
        prevSelected.includes(option)
          ? prevSelected.filter((item) => item !== option) // 선택 해제
          : [...prevSelected, option] // 선택 추가
    );
  };

  const handleNext = () => {
    router.push("/loading"); // ✅ 결과 페이지로 이동
  };

  const handlePrev = () => {
    router.push("/SimpleQuestion/q5"); // ✅ 4번째 질문으로 이동
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
          <span className={styles.currentStep}>6</span> / 6
        </div>

        {/* 2열 버튼 그리드 배치 */}
        <div className={styles.optionsGrid}>
          {options.map((option, index) => (
            <button
              key={index}
              className={`${styles.option} ${
                selectedOptions.includes(option) ? styles.selected : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          ))}
        </div>

        {/* 이전 / 다음 버튼 */}
        <div className={styles.buttonContainer}>
          <button className={styles.prevButton} onClick={handlePrev}>
            이전
          </button>
          <button
            className={styles.nextButton}
            onClick={handleNext}
            disabled={selectedOptions.length === 0}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
