import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "그룸힘 - 당신만을 위한 맞춤형 스킨케어",
  description: "당신의 피부 타입을 분석하여 맞춤형 스킨케어 제품을 추천해드립니다.",
  openGraph: {
    title: "그룸힘 - 당신만을 위한 맞춤형 스킨케어",
    description: "당신의 피부 타입을 분석하여 맞춤형 스킨케어 제품을 추천해드립니다.",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "그룸힘 - 맞춤형 스킨케어 추천",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "그룸힘 - 당신만을 위한 맞춤형 스킨케어",
    description: "당신의 피부 타입을 분석하여 맞춤형 스킨케어 제품을 추천해드립니다.",
    images: ["/logo.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
