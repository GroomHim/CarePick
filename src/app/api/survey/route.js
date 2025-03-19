import { NextResponse } from 'next/server';
import { saveSurveyType } from '@/lib/db';

// Edge 런타임 제거 - 노드 호환성 문제로 인해
// export const runtime = 'edge';

// 캐시 설정 - 동적 응답 필요
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// 설문 타입 저장
export async function POST(request) {
  try {
    // 요청 본문에서 데이터 추출
    const data = await request.json();
    const { surveyType } = data;
    
    // 필수 데이터 확인 - 클라이언트에서 바로 결과 반환
    if (!surveyType) {
      return NextResponse.json(
        { error: '설문 타입은 필수입니다.' },
        { status: 400 }
      );
    }
    
    // 설문 타입 유효성 검사 - 클라이언트에서 바로 결과 반환
    if (surveyType !== 'simple' && surveyType !== 'detailed') {
      return NextResponse.json(
        { error: '유효하지 않은 설문 타입. "simple" or "detailed"만 가능.' },
        { status: 400 }
      );
    }
    
    // 성공 응답 선행 반환 (클라이언트에게 빠른 응답 제공)
    const responseData = {
      success: true,
      message: '설문 타입 저장 중',
      data: {
        surveyType
      }
    };
    
    // 데이터베이스 저장은 백그라운드에서 처리
    saveSurveyType(surveyType)
      .then(insertId => {
        console.log('설문 타입 저장 성공:', insertId);
      })
      .catch(error => {
        console.error('설문 타입 저장 실패:', error);
      });
    
    // 클라이언트에게 즉시 성공 응답 반환
    return NextResponse.json(responseData);
    
  } catch (error) {
    console.error('API 오류:', error);
    
    return NextResponse.json(
      { error: '서버 오류 발생', details: error.message },
      { status: 500 }
    );
  }
} 