import mysql from 'mysql2/promise';

// 싱글톤 패턴으로 풀 생성 - 애플리케이션 전체에서 한 번만 초기화됨
let pool;

function getPool() {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      // 연결 유지를 위한 설정 추가
      enableKeepAlive: true,
      keepAliveInitialDelay: 10000 // 10초마다 연결 유지
    });
    
    // 연결 풀 초기화 - 첫 연결을 미리 생성
    initPool();
  }
  return pool;
}

// 애플리케이션 시작 시 연결 풀 초기화
async function initPool() {
  try {
    const connection = await pool.getConnection();
    console.log('DB 연결 풀 초기화 성공');
    connection.release();
  } catch (error) {
    console.error('DB 연결 풀 초기화 실패', error);
  }
}

// 데이터베이스 연결 확인 함수
export async function testConnection() {
  try {
    const connection = await getPool().getConnection();
    console.log('DB 연결 성공');
    connection.release();
    return true;
  } catch (error) {
    console.error('DB 연결 실패', error);
    return false;
  }
}

// 설문 응답 저장 함수 
export async function saveSurveyType(surveyType) {
  try {
    const [result] = await getPool().execute(
      'INSERT INTO survey_responses (survey_type) VALUES (?)',
      [surveyType]
    );
    return result.insertId;
  } catch (error) {
    console.error('설문 타입 저장 실패:', error);
    throw error;
  }
}

// 애플리케이션 시작 시 연결 테스트 실행
testConnection();

export default getPool(); 