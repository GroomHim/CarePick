"use client";
import styles from "../styles/Result.module.css";

export default function ProductRecommendation({ product }) {
  return (
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
  );
} 