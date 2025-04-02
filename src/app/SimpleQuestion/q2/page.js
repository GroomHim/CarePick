"use client";
import Image from "next/image"; // Next.js 이미지 최적화
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../../../styles/q1.module.css";

export default function SurveyQuestion() {
  const router = useRouter();
  const question = "외출 후 2~3시간 뒤 내 피부 상태는 어떤가요?";

  // 이미지 파일 경로 설정
  const options = [
    { id: "photo1", src: "/skin/1.png", alt: "아무런 변화가 없다.", value: 1 },
    {
      id: "photo2",
      src: "/skin/2.png",
      alt: "유분기가 생기나 눈에 띄는 \n 변화는 아니다.",
      value: 2,
    },
    {
      id: "photo3",
      src: "/skin/3.png",
      alt: "유뷴기가 눈에 보이는 정도이나 \n불편한 정도는 아니다.",
      value: 3,
    },
    {
      id: "photo4",
      src: "/skin/4.png",
      alt: "유분기가 눈에 띄게 보이고 \n 번들거림이 심하다.",
      value: 4,
    },
    {
      id: "photo5",
      src: "/skin/5.png",
      alt: "기름종이를 이용해 닦아내 주어야 할 \n 정도로 유분기가 심하다.",
      value: 5,
    },
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  // 저장된 선택값 불러오기 (localStorage에서 유지)
  useEffect(() => {
    const storedAnswer = localStorage.getItem("Q2");
    if (storedAnswer) {
      setSelectedOption(parseInt(storedAnswer)); // 기존 선택 유지
    }
  }, []);

  // 선택 시 `localStorage`에 저장 (value) 값 저장)
  const handleOptionSelect = (value) => {
    setSelectedOption(value); // value 값을 저장
    localStorage.setItem("Q2", value); // 점수 저장
  };

  // 다음 질문으로 이동
  const handleNext = () => {
    router.push("/SimpleQuestion/q3");
  };

  // 이전 질문으로 이동
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
                selectedOption === option.value ? styles.selected : ""
              }`}
              onClick={() => handleOptionSelect(option.value)}
            >
              <Image
                src={option.src}
                alt={option.alt}
                width={200}
                height={200}
                className={styles.optionImage}
              />
              <span className={styles.optionText}>{option.alt}</span>
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
