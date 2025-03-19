import { useState, useEffect, useCallback } from 'react';

/**
 * 페이지 프리로딩 로직을 담당하는 커스텀 훅
 * 지정된 경로의 페이지를 미리 로드하여 페이지 전환 속도를 개선.
 * 
 * @param {string[]} paths - 미리 로드할 페이지 경로 배열
 * @returns {object} 프리로딩 상태 객체
 */
export function usePagePreloading(paths) {
  const [pagesPreloaded, setPagesPreloaded] = useState(false);
  
  // 페이지 프리로드 함수를 useCallback으로 메모이제이션
  const preloadPages = useCallback(async () => {
    try {
      if (typeof window !== 'undefined' && !pagesPreloaded) {
        // 모든 가능한 다음 페이지를 한 번에 미리 로드
        const preloadPromises = paths.map(path => 
          fetch(path, { priority: 'high' }).catch(() => {})
        );
        
        await Promise.all(preloadPromises);
        setPagesPreloaded(true);
        console.log('페이지 프리로딩 완료:', paths);
      }
    } catch (error) {
      console.error('페이지 프리로딩 실패:', error);
    }
  }, [paths, pagesPreloaded]);

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
  
  return { pagesPreloaded };
} 