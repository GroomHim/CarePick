"use client";
import { useRouter } from "next/navigation";
import styles from "../styles/Result.module.css";
import ProductRecommendation from "./ProductRecommendation";
import SkinTypeResult from "./SkinTypeResult";

export default function ResultPage() {
  const router = useRouter();

  // 하드코딩된 피부 타입 정보
  const typeInfo = {
    id: 1,
    name: "수부지트러블형",
    description:
      "수부지 트러블피부는 피지 분비가 많지만 속건조로 인해 수분이 부족한 상태로, 트러블이 쉽게 발생합니다. 이를 관리하기 위해서는 가벼운 수분크림과 피지 조절 제품을 사용하는 것이 중요합니다. 또한, 과도한 클렌징을 피하고 순한 수분 성분와 적절한 보습을 유지하는 것이 필요합니다.",
  };

  // 하드코딩된 추천 제품
  const product = {
    name: "[이니스프리] 블루베리 리밸런싱 5.5 클렌저",
    price: "8,900원",
    image: "/logo.svg",
  };

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
          당신의 피부 타입은?
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
