"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../../../../styles/q1.module.css";

export default function SensitiveQ6() {
  const router = useRouter();
  const question = "여행 후 피부가 어떻게 변했나요?";
  const options = [
    { label: "전혀 변화 없다", value: 1 },
    { label: "약간 민감해진다", value: 2 },
    { label: "민감해지고 트러블이 생긴다", value: 3 },
    { label: "피부 상태가 심하게 악화된다", value: 4 },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  // ✅ 기존 선택값 유지
  useEffect(() => {
    const storedAnswer = localStorage.getItem("Sensitive_Q6");
    if (storedAnswer) {
      setSelectedOption(parseInt(storedAnswer));
    }
  }, []);

  // ✅ 선택 시 `localStorage`에 저장
  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    localStorage.setItem("Sensitive_Q6", value);
  };

  // ✅ "다음" 버튼 클릭 시 예민도 최종 계산
  const handleNext = () => {
    let totalSensitiveScore = 0;
    for (let i = 1; i <= 6; i++) {
      totalSensitiveScore +=
        parseInt(localStorage.getItem(`Sensitive_Q${i}`)) || 0;
    }

    // ✅ 예민도 판별 (16 이상: 예민, 그 외: 무난)
    const sensitiveSkin = totalSensitiveScore >= 16 ? "Sensitive" : "Resistant";

    localStorage.setItem("totalSensitiveScore", totalSensitiveScore);
    localStorage.setItem("sensitiveSkin", sensitiveSkin);
    console.log(
      `🔥 예민도 점수: ${totalSensitiveScore}, 예민도: ${sensitiveSkin}`
    );

    // ✅ 착색도 평가로 이동
    router.push("/DetailQuestion/Pigmented/q12");
  };

  // ✅ 이전 질문으로 이동
  const handlePrev = () => {
    router.push("/DetailQuestion/Sensitive/q10");
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

      {/* 선택 옵션 박스 */}
      <div className={styles.surveyBox}>
        <div className={styles.progress}>
          <span className={styles.currentStep}>11</span> / 20
        </div>

        {/* 옵션 선택 버튼 */}
        {options.map((option, index) => (
          <button
            key={index}
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
            disabled={selectedOption === null} // 🔥 선택하지 않으면 버튼 비활성화
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
