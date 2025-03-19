"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import styles from "../styles/SurveySelect.module.css";
import api from "@/lib/api";

export default function SurveySelect() {
  const [selectedSurvey, setSelectedSurvey] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pagesPreloaded, setPagesPreloaded] = useState(false);
  const router = useRouter();

  // 페이지 프리로드 함수를 useCallback으로 메모이제이션
  const preloadPages = useCallback(async () => {
    try {
      if (typeof window !== 'undefined' && !pagesPreloaded) {
        // 모든 가능한 다음 페이지를 한 번에 미리 로드
        const preloadPromises = [
          fetch('/SimpleQuestion/q1', { priority: 'high' }),
          fetch('/DetailQuestion/q1', { priority: 'high' })
        ];
        
        await Promise.all(preloadPromises);
        setPagesPreloaded(true);
        console.log('페이지 프리로딩 완료');
      }
    } catch (error) {
      console.error('페이지 프리로딩 실패:', error);
    }
  }, [pagesPreloaded]);

  // 컴포넌트 마운트 시 페이지 프리로딩
  useEffect(() => {
    // 페이지 로드 직후 실행
    preloadPages();
    
    // 브라우저가 유휴 상태일 때 사전 연결 설정
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        // API 서버에 사전 연결 설정
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = window.location.origin;
        document.head.appendChild(link);
      });
    }
  }, [preloadPages]);

  // 설문 타입을 API로 저장하는 함수
  const saveSurveyTypeToDatabase = async (surveyType) => {
    try {
      // Axios 인스턴스 사용 - 인터셉터에서 에러 처리
      const response = await api.post('/api/survey', { surveyType });
      console.log('설문 타입 저장 성공:', response.data);
      return response.data;
    } catch (error) {
      // 인터셉터에서 이미 에러 로깅을 처리했지만, UI에 표시하기 위해 상태 업데이트
      const errorMessage = error.response?.data?.error || error.message || '설문 타입 저장 중 오류가 발생했습니다.';
      setError(errorMessage);
      return null;
    }
  };

  const handleSurveySelect = (surveyType) => {
    setSelectedSurvey(surveyType);
    
    // 즉시 페이지 전환 시작 (사용자 경험 개선)
    const nextPath = surveyType === "simple" 
      ? "/SimpleQuestion/q1" 
      : "/DetailQuestion/Oily/q1";
    
    // 페이지 전환 즉시 실행 (로딩 표시 없이)
    router.push(nextPath);
    
    // 백그라운드에서 데이터 저장 - 페이지 이동 후에도 계속 진행됨
    saveSurveyTypeToDatabase(surveyType)
      .catch((error) => console.error('백그라운드 저장 실패:', error));
  };

  return (
    <div className={styles.container}>
      <img
        src="/logo.svg"
        alt="Logo"
        width="199"
        height="30"
        style={{ display: "block", margin: "30px auto" }}
      />
      {/* 상단 텍스트 박스 */}
      <div className={styles.welcomeBox}>
        그룸힘 스킨케어 설문에 오신 것을 환영합니다!
      </div>

      {/* 설문 선택 박스 */}
      <div className={styles.surveyBox}>
        <p className={styles.description}>
          내 피부에 딱 맞는 스킨케어 루틴을 찾아보세요.
        </p>
        
        {/* 에러 메시지 표시 */}
        {error && <p className={styles.errorMessage}>{error}</p>}
        
        <div className={styles.buttonContainer}>
          {/* 간단 설문지 */}
          <button
            className={`${styles.button} ${
              selectedSurvey === "simple" ? styles.selected : ""
            }`}
            onClick={() => handleSurveySelect("simple")}
            disabled={isLoading}
          >
            {isLoading && selectedSurvey === "simple" ? "처리 중..." : "간단 설문지"}
          </button>

          {/* 상세 진단 설문지 */}
          <button
            className={`${styles.button} ${
              selectedSurvey === "detailed" ? styles.selected : ""
            }`}
            onClick={() => handleSurveySelect("detailed")}
            disabled={isLoading}
          >
            {isLoading && selectedSurvey === "detailed" ? "처리 중..." : "상세 진단 설문지"}
          </button>
        </div>
      </div>
    </div>
  );
}
