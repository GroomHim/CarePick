"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../../../styles/q1.module.css";

export default function SurveyQuestion() {
  const router = useRouter();
  const question = "다음 중 해당하는 것을 모두 고르세요.";
  const options = [
    "햇빛에 타면 빨개지기 보다 까매진다.",
    "여드름 자국이 갈색으로 변한다.",
    "햇빛을 받으면 주근깨가 생긴다.",
    "피부가 전체적으로 얼룩덜룩 하다.",
    "해당 없음",
  ];

  const [selectedOptions, setSelectedOptions] = useState([]); // 다중 선택 가능하도록 배열로 변경

  // 저장된 선택값 불러오기 (localStorage에서 유지)
  useEffect(() => {
    try {
      const stored = localStorage.getItem("Q4");
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        setSelectedOptions(parsed);
      } else {
        setSelectedOptions([]); // fallback
      }
    } catch (e) {
      console.error("Q4 파싱 에러:", e);
      setSelectedOptions([]);
    }
  }, []);

  // 선택 시 `localStorage`에 저장
  const handleOptionClick = (option) => {
    let newSelection = [];

    if (option === "해당 없음") {
      newSelection = selectedOptions.includes(option) ? [] : [option];
    } else {
      newSelection = selectedOptions.includes("해당 없음")
        ? [option]
        : selectedOptions.includes(option)
        ? selectedOptions.filter((item) => item !== option)
        : [...selectedOptions, option];
    }

    setSelectedOptions(newSelection);
    localStorage.setItem("Q4", JSON.stringify(newSelection));
  };

  // 착색도 점수 계산 후 저장
  const handleNext = () => {
    let pigmentationScore = 0;

    if (selectedOptions.includes("해당 없음") || selectedOptions.length <= 2) {
      pigmentationScore = 0; // 착색 X
    } else {
      pigmentationScore = 1; // 착색 O
    }

    localStorage.setItem("pigmentation", pigmentationScore);
    console.log("착색도:", pigmentationScore);

    router.push("/SimpleQuestion/q5");
  };

  // 이전 질문으로 이동
  const handlePrev = () => {
    router.push("/SimpleQuestion/q3"); // 2번째 질문으로 이동
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
          <span className={styles.currentStep}>4</span> / 6
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
            disabled={selectedOptions.length === 0} // 하나 이상 선택해야 활성화
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
