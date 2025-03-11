import mysql from 'mysql2/promise';

// 데이터베이스 연결 풀 생성
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// 데이터베이스 연결 확인 함수
export async function testConnection() {
  try {
    const connection = await pool.getConnection();
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
    const [result] = await pool.execute(
      'INSERT INTO survey_responses (survey_type) VALUES (?)',
      [surveyType]
    );
    return result.insertId;
  } catch (error) {
    console.error('설문 타입 저장 실패:', error);
    throw error;
  }
}

export default pool; 