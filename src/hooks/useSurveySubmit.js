import { useState } from 'react';
import api from '@/lib/api';

/**
 * 설문 제출 로직을 담당하는 커스텀 훅
 * 설문 타입을 API로 제출하고 관련 상태를 관리.
 */
export function useSurveySubmit() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  /**
   * 설문 타입을 API로 저장하는 함수
   * @param {string} surveyType - 설문 타입 ("simple" 또는 "detailed")
   * @returns {Promise<object|null>} - API 응답 데이터 또는 에러 발생 시 null
   */
  const submitSurveyType = async (surveyType) => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Axios 인스턴스 사용 - 인터셉터에서 에러 처리
      const response = await api.post('/api/survey', { surveyType });
      console.log('설문 타입 저장 성공:', response.data);
      return response.data;
    } catch (error) {
      // 인터셉터에서 이미 에러 로깅을 처리했지만, UI에 표시하기 위해 상태 업데이트
      const errorMessage = error.response?.data?.error || error.message || '설문 타입 저장 중 오류가 발생했습니다.';
      setError(errorMessage);
      return null;
    } finally {
      setIsLoading(false);
    }
  };
  
  return { submitSurveyType, error, isLoading };
} 