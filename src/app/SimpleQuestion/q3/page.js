"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../../../styles/q1.module.css";

export default function SurveyQuestion() {
  const router = useRouter();
  const question = "다음 중 해당하는 것을 모두 고르세요.";
  const options = [
    "햇빛에 타면 빨개지기 보다 깨어진다.",
    "여드름 자국이 갈색으로 변한다.",
    "햇빛을 받으면 주근깨가 생긴다.",
    "피부가 전체적으로 얼룩덜룩 하다.",
    "해당 없음",
  ];

  const [selectedOptions, setSelectedOptions] = useState([]); // ✅ 다중 선택 가능하도록 배열로 변경

  /// 옵션 선택 (토글 방식)
  const handleOptionClick = (option) => {
    setSelectedOptions(
      (prevSelected) =>
        prevSelected.includes(option)
          ? prevSelected.filter((item) => item !== option) // ✅ 이미 선택된 경우 → 제거
          : [...prevSelected, option] // ✅ 선택되지 않은 경우 → 추가
    );
  };

  // 다음 질문으로 이동
  const handleNext = () => {
    router.push("/SimpleQuestion/q4"); // ✅ 4번째 질문으로 이동
  };

  // 이전 질문으로 이동
  const handlePrev = () => {
    router.push("/SimpleQuestion/q2"); // ✅ 2번째 질문으로 이동
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
          <span className={styles.currentStep}>3</span> / 5
        </div>

        {/* 옵션 선택 (다중 선택 가능) */}
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

        {/* 이전 / 다음 버튼 */}
        <div className={styles.buttonContainer}>
          <button className={styles.prevButton} onClick={handlePrev}>
            이전
          </button>
          <button
            className={styles.nextButton}
            onClick={handleNext}
            disabled={selectedOptions.length === 0} // ✅ 하나 이상 선택해야 활성화
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
