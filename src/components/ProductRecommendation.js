"use client";
import styles from "../styles/Result.module.css";

export default function ProductRecommendation({ products }) {
  if (!products || products.length === 0) {
    return (
      <div className={styles.productSection}>
        <p className={styles.productTitle}>피부타입에 맞는 제품 추천 해드릴게요!</p>
        <p>추천할 제품이 없습니다.</p>
      </div>
    );
  }

  return (
    <div className={styles.productSection}>
      <p className={styles.productTitle}>피부타입에 맞는 제품 추천 해드릴게요!</p>
      
      <div className={styles.productGrid}>
        {products.map((product, index) => (
          <div key={index} className={styles.productCard}>
            <div className={styles.productType}>{product.type}</div>
            <div className={styles.productImageContainer}>
              <img 
                src={product.image || "/logo.svg"} 
                alt={product.name} 
                className={styles.productImage}
                onError={(e) => {
                  e.target.src = "/logo.svg";
                  e.target.onerror = null; // 무한 루프 방지
                }}
              />
            </div>
            <div className={styles.productInfo}>
              <p className={styles.productName}>{product.name}</p>
              <p className={styles.productPrice}>{product.price}</p>
              <button className={styles.buyButton}>구매하기</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 