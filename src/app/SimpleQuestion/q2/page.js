"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../../../styles/q1.module.css";

export default function SurveyQuestion() {
  const router = useRouter();
  const question = "다음 중 해당하는 것을 모두 고르세요.";
  const options = [
    "어떤 운동이든 운동 후 피부가 붉어지는 편이다.",
    "화장품을 바르고 가렵거나 따가운적이 있다.",
    "아토피나 금속, 햇빛 알러지를 앓은 적이 있다.",
    "얼굴 피부 중에서도 핏줄이 보이는 곳이 있다.",
    "해당 없음",
  ];

  const [selectedOptions, setSelectedOptions] = useState([]); // 다중 선택 가능하도록 배열로 변경

  const handleOptionClick = (option) => {
    if (option === "해당 없음") {
      setSelectedOptions((prevSelected) =>
        prevSelected.includes(option) ? [] : [option]
      );
    } else {
      setSelectedOptions(
        (prevSelected) =>
          prevSelected.includes("해당 없음")
            ? [option] // 해당 없음 선택되어 있으면 다른 옵션만 선택
            : prevSelected.includes(option)
            ? prevSelected.filter((item) => item !== option) // 선택 해제
            : [...prevSelected, option] // 새 옵션 추가
      );
    }
  };

  // ✅ 다음 질문으로 이동
  const handleNext = () => {
    router.push("/SimpleQuestion/q3");
  };

  // ✅ 이전 질문으로 이동
  const handlePrev = () => {
    router.push("/SimpleQuestion/q1");
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
          <span className={styles.currentStep}>2</span> / 5
        </div>

        {/* 옵션 선택 (다중 선택 가능, 선택 해제 가능) */}
        {options.map((option, index) => (
          <button
            key={index}
            className={`${styles.option} ${
              selectedOptions.includes(option) ? styles.selected : ""
            }`}
            onClick={() => handleOptionClick(option)}
            disabled={
              selectedOptions.includes("해당 없음") && option !== "해당 없음"
            }
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
            disabled={selectedOptions.length === 0} //하나 이상 선택해야 "다음" 버튼 활성화
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
