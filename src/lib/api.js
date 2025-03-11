import axios from 'axios';

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터
api.interceptors.request.use(
  (config) => {
    // 요청 전 수행할 작업
    return config;
  },
  (error) => {
    console.error('API 요청 에러:', error);
    return Promise.reject(error);
  }
);

// 응답 인터셉터
api.interceptors.response.use(
  (response) => {
    // 응답 데이터 추가 작업
    return response;
  },
  (error) => {
    // 응답 에러 처리
    if (error.response) {
      const { status, data } = error.response;
      
      switch (status) {
        case 400:
          console.error('잘못된 요청:', data);
          break;
        case 401:
          console.error('인증 실패:', data);
          break;
        case 403:
          console.error('접근 권한 없음:', data);
          break;
        case 404:
          console.error('리소스를 찾을 수 없음:', data);
          break;
        case 500:
          console.error('서버 오류:', data);
          break;
        default:
          console.error('API 오류:', data);
      }
    } else if (error.request) {
      // 요청은 보냄 && 응답 x
      console.error('응답 없음:', error.request);
    } else {
      // 요청 설정 중 에러 발생
      console.error('요청 설정 오류:', error.message);
    }
    
    return Promise.reject(error);
  }
);

export default api; 