"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getSkinTypeFromLocalStorage } from "../data/skinTypes";
import styles from "../styles/Result.module.css";
import ProductRecommendation from "./ProductRecommendation";
import SkinTypeResult from "./SkinTypeResult";

export default function ResultPage() {
  const router = useRouter();
  const [typeInfo, setTypeInfo] = useState({});

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const skinData = getSkinTypeFromLocalStorage();

      if (skinData && skinData.typeInfo) {
        setTypeInfo(skinData.typeInfo);
      } else {
        console.log(
          "피부 타입 정보가 없습니다:",
          localStorage.getItem("finalSkinType")
        );
      }

      // ✅ 모든 질문 데이터 및 결과값 삭제 (정확히 반영)
      const questionKeys = [
        // 간단 질문
        "Q1",
        "Q2",
        "Q3",
        "Q4",
        "Q5",
        "Q6",

        // 상세 질문 (예민도)
        "Sensitive_Q1",
        "Sensitive_Q2",
        "Sensitive_Q3",
        "Sensitive_Q4",
        "Sensitive_Q5",
        "Sensitive_Q6",

        // 상세 질문 (착색도)
        "Pigmented_Q1",
        "Pigmented_Q2",
        "Pigmented_Q3",
        "Pigmented_Q4",
        "Pigmented_Q5",
        "Pigmented_Q6",

        // 상세 질문 (최종 질문)
        "Final_Q1",
        "Final_Q2",
        "Final_Q3",

        // 계산 결과 값들
        "totalScore",
        "totalSensitiveScore",
        "totalPigmentedScore",
        "finalSkinType",
      ];

      questionKeys.forEach((key) => localStorage.removeItem(key));
      console.log("모든 설문 데이터가 삭제되었습니다.");
    } catch (error) {
      console.error("피부 타입 정보 로드 실패:", error);
    }
  }, []);

  const handleGoToHome = () => {
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img
          src="/logo.svg"
          alt="Logo"
          width="170"
          height="26"
          style={{ display: "block", margin: "15px auto" }}
        />
        <button className={styles.skinTypeButton} onClick={handleGoToHome}>
          피부 타입 다시 검사하기
        </button>
      </div>

      <div className={styles.resultBox}>
        <SkinTypeResult typeInfo={typeInfo} />
        <ProductRecommendation products={typeInfo.products} />
      </div>
    </div>
  );
}
