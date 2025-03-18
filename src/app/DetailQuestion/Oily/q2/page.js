"use client";
import Image from "next/image"; // ✅ Next.js 최적화 이미지 사용
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../../../../styles/q1.module.css";

export default function SurveyQuestion() {
  const router = useRouter();
  const question = "외출 후 2~3시간 뒤 내 피부 상태는 어떤가요?";

  // ✅ 이미지 선택 옵션 (파일 경로 및 점수 포함)
  const options = [
    { id: "photo1", src: "/skin/1.png", alt: "매우 건조하다", value: 1 },
    { id: "photo2", src: "/skin/2.png", alt: "약간 건조하다", value: 2 },
    { id: "photo3", src: "/skin/3.png", alt: "보통이다", value: 3 },
    { id: "photo4", src: "/skin/4.png", alt: "약간 번들거린다", value: 4 },
    { id: "photo5", src: "/skin/5.png", alt: "매우 번들거린다", value: 5 },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  // ✅ 기존에 선택된 값 불러오기 (localStorage에서 유지)
  useEffect(() => {
    const storedAnswer = localStorage.getItem("Q2");
    if (storedAnswer) {
      setSelectedOption(parseInt(storedAnswer)); // 🔥 기존 선택 유지
    }
  }, []);

  // ✅ 선택 시 `localStorage`에 저장
  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    localStorage.setItem("Q2", value); // 🔥 점수를 localStorage에 저장
  };

  // ✅ 다음 질문으로 이동
  const handleNext = () => {
    router.push("/DetailQuestion/Oily/q3");
  };

  // ✅ 이전 질문으로 이동
  const handlePrev = () => {
    router.push("/DetailQuestion/Oily/q1");
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
          <span className={styles.currentStep}>2</span> / 20
        </div>

        {/* 이미지 버튼 선택 */}
        <div className={styles.imageGrid}>
          {options.map((option) => (
            <button
              key={option.id}
              className={`${styles.imageOption} ${
                selectedOption === option.value ? styles.selected : ""
              }`}
              onClick={() => handleOptionSelect(option.value)}
            >
              <Image
                src={option.src}
                alt={option.alt}
                width={200} // ✅ 원하는 크기로 조절 가능
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
            disabled={selectedOption === null} // 🔥 선택하지 않으면 "다음" 버튼 비활성화
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
