"use client";
import styles from "../styles/SurveySelect.module.css";

/**
 * 설문 옵션 버튼 컴포넌트
 * 설문 타입 선택 버튼의 UI와 상태를 관리합니다.
 * 
 * @param {object} props - 컴포넌트 속성
 * @param {string} props.label - 버튼에 표시할 텍스트
 * @param {boolean} props.isSelected - 버튼 선택 여부
 * @param {boolean} props.isLoading - 로딩 상태 여부
 * @param {Function} props.onClick - 클릭 이벤트 핸들러
 * @returns {JSX.Element} 설문 옵션 버튼 컴포넌트
 */
export function SurveyOptionButton({ 
  label, 
  isSelected = false, 
  isLoading = false, 
  onClick 
}) {
  return (
    <button
      className={`${styles.button} ${isSelected ? styles.selected : ""}`}
      onClick={onClick}
      disabled={isLoading}
      aria-pressed={isSelected}
    >
      {isLoading ? "처리 중..." : label}
    </button>
  );
} 