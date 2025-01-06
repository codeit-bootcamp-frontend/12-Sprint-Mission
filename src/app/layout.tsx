import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import "./globals.css";
import "@assets/scss/style.scss";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "판다마켓",
  description: "일상의 모든 물건을 거래해보세요",
  openGraph: {
    type: "website",
    siteName: "판다마켓",
    title: "판다마켓",
    description: "일상의 모든 물건을 거래해보세요",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
