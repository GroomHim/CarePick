"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../styles/SurveySelect.module.css";

export default function SurveySelect() {
  {
    /*설문지 페이지가 없어서 임시로 결과 페이지로 렌딩*/
  }
  const [selectedSurvey, setSelectedSurvey] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (selectedSurvey) {
      router.push("/question/q1");
    }
  }, [selectedSurvey, router]);

  const handleSurveySelect = (surveyType, type) => {
    setSelectedSurvey(surveyType, type);
    if (surveyType === "simple") {
      router.push("/question/q1"); // 간단 설문지 선택 시 q1 페이지로 이동
    }
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
      {/* 상단 텍스트 박스 */}
      <div className={styles.welcomeBox}>
        그룸힘 스킨케어 설문에 오신 것을 환영합니다!
      </div>

      {/* 설문 선택 박스 */}
      <div className={styles.surveyBox}>
        <p className={styles.description}>
          내 피부에 딱 맞는 스킨케어 루틴을 찾아보세요.
        </p>
        <div className={styles.buttonContainer}>
          {/* 간단 설문지 */}
          <button
            className={`${styles.button} ${
              selectedSurvey === "simple" ? styles.selected : ""
            }`}
            onClick={() => handleSurveySelect("simple")}
          >
            간단 설문지
          </button>

          {/* 상세 진단 설문지 */}
          <button
            className={`${styles.button} ${
              selectedSurvey === "detailed" ? styles.selected : ""
            }`}
            onClick={() => handleSurveySelect("detailed")}
          >
            상세 진단 설문지
          </button>
        </div>
      </div>
    </div>
  );
}
