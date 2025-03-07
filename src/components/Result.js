"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/Result.module.css";

export default function ResultPage() {
  const router = useRouter();
  const [product, setProduct] = useState({
    name: "[이니스프리] 블루베리 리밸런싱 5.5 클렌저",
    price: "8,900원",
    image: "/groomhim.svg"
  });

  const handleGoToHome = () => {
    router.push('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.logo}>Groomhim</h1>
        <button 
          className={styles.skinTypeButton}
          onClick={handleGoToHome}
        >
          당신의 피부 타입은?
        </button>
      </div>

      <div className={styles.resultBox}>
        <div className={styles.resultText}>
          <p>그룸힘님의 피부타입은</p>
          <p>1번타입 <span className={styles.highlight}>수부지트러블형</span>입니다.</p>
        </div>

        <p className={styles.resultDescription}>
          수부지 트러블피부는 피지 분비가 많지만 속건조로 인해 수분이 부족한 상태로, 트러블이 쉽게 발생합니다. 이를 관리하기 위해서는 가벼운 수분크림과 피지 조절 제품을 사용하는 것이 중요합니다. 또한, 과도한 클렌징을 피하고 순한 수분 성분와 적절한 보습을 유지하는 것이 필요합니다.
        </p>

        <div className={styles.productSection}>
          <p className={styles.productTitle}>피부타입에 맞는 제품 추천 해드릴게요!</p>
          
          <div className={styles.productCard}>
            <div className={styles.productImageContainer}>
              <img 
                src={product.image} 
                alt={product.name} 
                className={styles.productImage}
              />
            </div>
            <div className={styles.productInfo}>
              <p className={styles.productName}>{product.name}</p>
              <p className={styles.productPrice}>{product.price}</p>
              <button className={styles.buyButton}>제품 구경하러 가기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 