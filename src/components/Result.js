"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "../styles/Result.module.css";
import ProductRecommendation from "./ProductRecommendation";
import SkinTypeResult from "./SkinTypeResult";
import { getSkinTypeFromLocalStorage } from "../data/skinTypes";

export default function ResultPage() {
  const router = useRouter();
  const [typeInfo, setTypeInfo] = useState({
    id: 1,
    name: "수부지트러블형",
    description:
      "수부지 트러블피부는 피지 분비가 많지만 속건조로 인해 수분이 부족한 상태로, 트러블이 쉽게 발생합니다. 이를 관리하기 위해서는 가벼운 수분크림과 피지 조절 제품을 사용하는 것이 중요합니다. 또한, 과도한 클렌징을 피하고 순한 수분 성분와 적절한 보습을 유지하는 것이 필요합니다.",
  });

  // 기본 추천 제품
  const [product, setProduct] = useState({
    name: "[이니스프리] 블루베리 리밸런싱 5.5 클렌저",
    price: "8,900원",
    image: "/logo.svg",
  });

  // 컴포넌트 마운트 시 로컬스토리지에서 피부 타입 정보 가져오기
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    try {
      // 로컬스토리지에서 피부 타입 정보 가져오기
      const skinData = getSkinTypeFromLocalStorage();
      
      // 피부 타입 정보가 있으면 설정
      if (skinData && skinData.typeInfo) {
        setTypeInfo(skinData.typeInfo);
        
        // 추천 제품이 있으면 첫 번째 제품 설정
        if (skinData.typeInfo.products && skinData.typeInfo.products.length > 0) {
          setProduct(skinData.typeInfo.products[0]);
        }
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
        <ProductRecommendation product={product} />
      </div>
    </div>
  );
}
