"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "../styles/Result.module.css";
import ProductRecommendation from "./ProductRecommendation";
import SkinTypeResult from "./SkinTypeResult";
import { getSkinTypeFromLocalStorage } from "../data/skinTypes";

export default function ResultPage() {
  const router = useRouter();
  const [typeInfo, setTypeInfo] = useState({});

  // 컴포넌트 마운트 시 로컬스토리지에서 피부 타입 정보 가져오기
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    try {
      // 로컬스토리지에서 피부 타입 정보 가져오기
      const skinData = getSkinTypeFromLocalStorage();
      
      // 피부 타입 정보가 있으면 설정
      if (skinData && skinData.typeInfo) {
        setTypeInfo(skinData.typeInfo);
      } else {
        console.log("피부 타입 정보가 없습니다:", localStorage.getItem("finalSkinType"));
      }
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
          width="199"
          height="30"
          style={{ display: "block", margin: "30px auto" }}
        />
        <button className={styles.skinTypeButton} onClick={handleGoToHome}>
          피부 타입 다시 검사하기
        </button>
      </div>

      <div className={styles.resultBox}>
        {/* 피부 타입 결과 컴포넌트 */}
        <SkinTypeResult typeInfo={typeInfo} />

        {/* 제품 추천 컴포넌트 */}
        <ProductRecommendation products={typeInfo.products} />
      </div>
    </div>
  );
}
