"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../../../../styles/q1.module.css";

export default function FinalQ1() {
  const router = useRouter();
  const question = "내 피부 고민은?";
  const options = [
    { label: "좁쌀 여드름", value: "acne_small" },
    { label: "화농성 여드름", value: "acne_inflamed" },
    { label: "모공", value: "pores" },
    { label: "주름, 탄력 저하", value: "wrinkles" },
    { label: "색소침착, 기미", value: "pigmentation" },
    { label: "홍조", value: "redness" },
    { label: "다크서클", value: "dark_circles" },
    { label: "블랙헤드, 화이트헤드", value: "blackhead_whitehead" },
    { label: "면도 후 염증", value: "shaving_irritation" },
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    const storedAnswer = JSON.parse(localStorage.getItem("Final_Q1")) || [];
    setSelectedOptions(storedAnswer);
  }, []);

  const handleOptionClick = (value) => {
    const updatedOptions = selectedOptions.includes(value)
      ? selectedOptions.filter((item) => item !== value)
      : [...selectedOptions, value];

    setSelectedOptions(updatedOptions);
    localStorage.setItem("Final_Q1", JSON.stringify(updatedOptions));
  };

  const handleNext = () => {
    router.push("/DetailQuestion/Final/q19");
  };

  const handlePrev = () => {
    router.push("/DetailQuestion/Pigmented/q17");
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
          <span className={styles.currentStep}>18</span> / 20
        </div>

        {/* 2열 버튼 그리드 배치 */}
        <div className={styles.optionsGridFinal}>
          {options.map((option, index) => (
            <button
              key={index}
              className={`${styles.option} ${
                selectedOptions.includes(option.value) ? styles.selected : ""
              }`}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.prevButton} onClick={handlePrev}>
            이전
          </button>
          <button className={styles.nextButton} onClick={handleNext}>
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
