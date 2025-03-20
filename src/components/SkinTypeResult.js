"use client";
import styles from "../styles/Result.module.css";

export default function SkinTypeResult({ typeInfo }) {
  return (
    <>
      <div className={styles.resultText}>
        <p>그룸힘님의 피부타입은</p>
        <p><span className={styles.highlight}>{typeInfo.name}</span>입니다.</p>
      </div>

      <p className={styles.resultDescription}>
        {typeInfo.description}
      </p>
    </>
  );
} 