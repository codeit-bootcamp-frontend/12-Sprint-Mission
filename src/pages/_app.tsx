import HeaderLayout from "@/components/header-layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeaderLayout />
      <div className="page_wrap">
        <div className="inner">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
