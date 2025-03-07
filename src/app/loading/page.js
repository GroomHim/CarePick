"use client";
import styles from "@/styles/loading.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            router.push("/result"); // ✅ Progress Bar가 끝나면 결과 페이지로 이동
          }, 500); // 약간의 딜레이 후 이동
          return 100;
        }
        return prev + 1; // ✅ Progress Bar 점진적으로 증가
      });
    }, 30); // ✅ 30ms마다 업데이트

    return () => clearInterval(interval);
  }, [router]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>1분 피부진단이 완료 되었습니다!</h1>
      <p className={styles.subtitle}>
        피부 타입 분석을 위해 잠시만 기다려주세요.
      </p>

      <div className={styles.progressCircle}>
        <svg width="150" height="150" viewBox="0 0 150 150">
          {/* 회색 배경 원 (프로그레스 바 뒤쪽) */}
          <circle
            cx="75"
            cy="75"
            r="60"
            stroke="#E0E0E0"
            strokeWidth="10"
            fill="none"
          />

          {/* 검은색 배경 원 (Progress Bar 내부 원) */}
          <circle cx="75" cy="75" r="45" fill="black" />

          {/* 진행되는 검은색 Progress 바 */}
          <circle
            cx="75"
            cy="75"
            r="60"
            stroke="#222"
            strokeWidth="10"
            fill="none"
            strokeDasharray="377" /* 전체 원 둘레 */
            strokeDashoffset={
              377 - (377 * progress) / 100
            } /* ✅ 퍼센트에 따라 변화 */
            strokeLinecap="round"
            transform="rotate(-90 75 75)" /* ✅ Progress 방향 조정 */
          />

          {/* 퍼센트 텍스트 */}
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="22"
            fontWeight="bold"
            fill="white"
          >
            {progress}%
          </text>
        </svg>
      </div>

      <p className={styles.loadingText}>피부 타입을 분석하고 있어요...</p>
    </div>
  );
}
