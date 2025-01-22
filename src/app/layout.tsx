import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { AxiosInterCeptor } from "@/context/AxiosInterCeptor";
import { SessionProvider } from "next-auth/react";
import "@assets/scss/style.scss";
import QueryClientProvider from "@/context/QueryClientProvider";

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
        <div id="root">
          <SessionProvider>
            <QueryClientProvider>
              <AxiosInterCeptor />
              {children}
            </QueryClientProvider>
          </SessionProvider>
        </div>
      </body>
    </html>
  );
}
