import { NextResponse } from 'next/server';
import { saveSurveyType } from '@/lib/db';

// 설문 타입 저장
export async function POST(request) {
  try {
    // 요청 본문에서 데이터 추출
    const data = await request.json();
    const { surveyType } = data;
    
    // 필수 데이터 확인
    if (!surveyType) {
      return NextResponse.json(
        { error: '설문 타입은 필수입니다.' },
        { status: 400 }
      );
    }
    
    // 설문 타입 유효성 검사
    if (surveyType !== 'simple' && surveyType !== 'detailed') {
      return NextResponse.json(
        { error: '유효하지 않은 설문 타입. "simple" or "detailed"만 가능.' },
        { status: 400 }
      );
    }
    
    // 데이터베이스에 저장
    const responseId = await saveSurveyType(surveyType);
    
    // 성공 응답
    return NextResponse.json({ 
      success: true, 
      message: '설문 타입 저장 성공',
      data: { 
        id: responseId,
        surveyType
      }
    });
    
  } catch (error) {
    console.error('API 오류:', error);
    return NextResponse.json(
      { error: '서버 오류 발생' },
      { status: 500 }
    );
  }
} 