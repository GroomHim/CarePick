"use client";
import { useState, useRef, useEffect } from "react";
import styles from "../styles/Result.module.css";

export default function SkinTypeResult({ typeInfo }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showMoreButton, setShowMoreButton] = useState(false);
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (descriptionRef.current) {
      // 실제 컨텐츠의 높이가 컨테이너(150px)보다 큰지 확인
      const scrollHeight = descriptionRef.current.scrollHeight;
      const clientHeight = descriptionRef.current.clientHeight;
      setShowMoreButton(scrollHeight > clientHeight);
    }
  }, [typeInfo.description]);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className={styles.resultText}>
        <p>그룸힘님의 피부타입은</p>
        <p><span className={styles.highlight}>{typeInfo.name}</span>입니다.</p>
      </div>

      <div 
        ref={descriptionRef}
        className={`${styles.resultDescription} ${isExpanded ? styles.expanded : ''}`}
      >
        <p>{typeInfo.description}</p>
        {showMoreButton && (
          <button 
            className={styles.readMoreButton} 
            onClick={toggleDescription}
          >
            {isExpanded ? '접기' : '더보기'}
          </button>
        )}
      </div>
    </>
  );
} 