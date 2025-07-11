import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleTagManager, { GoogleTagManagerNoScript } from "./components/GoogleTagManager";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "オープンソースドローン飛行日誌管理ツール",
  description: "誰でも簡単に使えるドローン飛行日誌管理ツール。飛行記録を安全に管理し、空の冒険を記録しましょう。",
  keywords: ["ドローン", "飛行日誌", "管理ツール", "オープンソース", "記録"],
  authors: [{ name: "Open Drone Diary" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {gtmId && <GoogleTagManagerNoScript gtmId={gtmId} />}
        {children}
        {gtmId && <GoogleTagManager gtmId={gtmId} />}
      </body>
    </html>
  );
}
