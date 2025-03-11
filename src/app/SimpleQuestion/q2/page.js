"use client";
import Image from "next/image"; // ✅ Next.js 이미지 최적화
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../../../styles/q1.module.css";

export default function SurveyQuestion() {
  const router = useRouter();
  const question = "외출 후 2~3시간 뒤 내 피부 상태는 어떤가요?";

  // ✅ 이미지 파일 경로 설정
  const options = [
    { id: "photo1", src: "/skin/1.png", alt: "매우 건조하다" },
    { id: "photo2", src: "/skin/2.png", alt: "약간 건조하다" },
    { id: "photo3", src: "/skin/3.png", alt: "보통이다" },
    { id: "photo4", src: "/skin/4.png", alt: "약간 번들거린다" },
    { id: "photo5", src: "/skin/5.png", alt: "매우 번들거린다" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

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
          <span className={styles.currentStep}>2</span> / 6
        </div>

        {/* 이미지 버튼 선택 */}
        <div className={styles.imageGrid}>
          {options.map((option) => (
            <button
              key={option.id}
              className={`${styles.imageOption} ${
                selectedOption === option.id ? styles.selected : ""
              }`}
              onClick={() => setSelectedOption(option.id)}
            >
              <Image
                src={option.src}
                alt={option.alt}
                width={200} // ✅ 원하는 크기로 조절
                height={200}
                className={styles.optionImage}
              />
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
            disabled={!selectedOption}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
