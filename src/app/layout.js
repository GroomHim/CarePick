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
  title: "그룸힘 - 맞춤형 스킨케어",
  description: "여기를 눌러 나에게 맞는 스킨케어를 찾아보세요",
  metadataBase: new URL('https://www.groom-him.com'),
  openGraph: {
    type: "website",
    siteName: "그룸힘",
    title: "그룸힘 - 맞춤형 스킨케어",
    description: "여기를 눌러 나에게 맞는 스킨케어를 찾아보세요",
    url: 'https://www.groom-him.com',
    images: [
      {
        url: 'https://www.groom-him.com/logo.svg',
        width: 1200,
        height: 630,
        alt: "그룸힘 - 맞춤형 스킨케어",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "그룸힘 - 맞춤형 스킨케어",
    description: "여기를 눌러 나에게 맞는 스킨케어를 찾아보세요",
    images: ['https://www.groom-him.com/logo.svg'],
  },
  alternates: {
    canonical: 'https://www.groom-him.com'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <meta name="theme-color" content="#ffffff"/>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="그룸힘" />
        <meta property="og:url" content="https://www.groom-him.com" />
        <meta property="og:title" content="그룸힘 - 맞춤형 스킨케어" />
        <meta property="og:description" content="여기를 눌러 나에게 맞는 스킨케어를 찾아보세요" />
        <meta property="og:image" content="https://www.groom-him.com/logo.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="그룸힘 - 맞춤형 스킨케어" />
        <meta name="twitter:description" content="여기를 눌러 나에게 맞는 스킨케어를 찾아보세요" />
        <meta name="twitter:image" content="https://www.groom-him.com/logo.svg" />
        <link rel="canonical" href="https://www.groom-him.com" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
