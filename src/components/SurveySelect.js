"use client";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../styles/SurveySelect.module.css";

export default function SurveySelect() {
  const [selectedSurvey, setSelectedSurvey] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  // 설문 타입을 API로 저장하는 함수
  const saveSurveyTypeToDatabase = async (surveyType) => {
    setIsLoading(true);
    setError(null);

    try {
      // 인터셉터에서 에러 처리
      const response = await api.post("/api/survey", { surveyType });
      return response.data;
    } catch (error) {
      // UI에 표시하기 위한 error 캐치
      const errorMessage =
        error.response?.data?.error ||
        error.message ||
        "설문 타입 저장 중 오류가 발생했습니다.";
      setError(errorMessage);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const handleSurveySelect = async (surveyType) => {
    setSelectedSurvey(surveyType);

    // 데이터베이스에 설문 타입 저장
    const result = await saveSurveyTypeToDatabase(surveyType);

    // 저장 성공 시 다음 페이지로 이동
    if (result) {
      if (surveyType === "simple") {
        console.log("간단 선택");
        router.push("/SimpleQuestion/q1"); // 간단 설문지 선택 시 q1 페이지로 이동
      } else if (surveyType === "detailed") {
        router.push("/DetailQuestion/q1"); // 상세 설문지 선택 시 q1 페이지로 이동
        console.log("상세 선택");
      }
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

        {/* 에러 메시지 표시 */}
        {error && <p className={styles.errorMessage}>{error}</p>}

        <div className={styles.buttonContainer}>
          {/* 간단 설문지 */}
          <button
            className={`${styles.button} ${
              selectedSurvey === "simple" ? styles.selected : ""
            }`}
            onClick={() => handleSurveySelect("simple")}
            disabled={isLoading}
          >
            {isLoading && selectedSurvey === "simple"
              ? "처리 중..."
              : "간단 설문지"}
          </button>

          {/* 상세 진단 설문지 */}
          <button
            className={`${styles.button} ${
              selectedSurvey === "detailed" ? styles.selected : ""
            }`}
            onClick={() => handleSurveySelect("detailed")}
            disabled={isLoading}
          >
            {isLoading && selectedSurvey === "detailed"
              ? "처리 중..."
              : "상세 진단 설문지"}
          </button>
        </div>
      </div>
    </div>
  );
}
