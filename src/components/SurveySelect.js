"use client";
import { usePagePreloading } from "@/hooks/usePagePreloading";
import { useSurveySubmit } from "@/hooks/useSurveySubmit";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../styles/SurveySelect.module.css";
import { SurveyOptionButton } from "./SurveyOptionButton";

export default function SurveySelect() {
  const [selectedSurvey, setSelectedSurvey] = useState("");
  const router = useRouter();
  const { submitSurveyType, error } = useSurveySubmit();

  // 페이지 프리로딩
  usePagePreloading(["/SimpleQuestion/q1", "/DetailQuestion/q1"]);

  const handleSurveySelect = (surveyType) => {
    setSelectedSurvey(surveyType);

    const nextPath =
      surveyType === "simple"
        ? "/SimpleQuestion/q1"
        : "/DetailQuestion/Oily/q1";

    // 페이지 전환
    router.push(nextPath);

    // 백그라운드에서 데이터 저장
    submitSurveyType(surveyType).catch((error) =>
      console.error("저장 실패:", error)
    );
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

      <div className={styles.welcomeBox}>
        그룸힘 스킨케어 설문에 오신 것을 환영합니다!
      </div>

      <div className={styles.surveyBox}>
        <p className={styles.description}>
          내 피부에 딱 맞는 스킨케어 루틴을 찾아보세요.
        </p>

        {error && <p className={styles.errorMessage}>{error}</p>}

        <div className={styles.buttonContainer}>
          <SurveyOptionButton
            label="간단 설문지"
            isSelected={selectedSurvey === "simple"}
            onClick={() => handleSurveySelect("simple")}
          />

          <SurveyOptionButton
            label="상세 진단 설문지"
            isSelected={selectedSurvey === "detailed"}
            onClick={() => handleSurveySelect("detailed")}
          />
        </div>
      </div>
    </div>
  );
}
