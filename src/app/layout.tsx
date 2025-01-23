import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import "@assets/scss/style.scss";
import QueryClientProvider from "@/context/QueryClientProvider";
import { auth } from "@/auth";

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

export default async function RootLayout({ children }: PropsWithChildren) {
  const session = await auth();

  return (
    <html lang="ko">
      <body>
        <div id="root">
          <SessionProvider session={session}>
            <QueryClientProvider>{children}</QueryClientProvider>
          </SessionProvider>
        </div>
      </body>
    </html>
  );
}
