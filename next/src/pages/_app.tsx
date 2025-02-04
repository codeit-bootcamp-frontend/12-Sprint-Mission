import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Head from "next/head";
import MainHeader from "@/components/MainHeader";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>판다마켓</title>
        <link rel="icon" href="/images/favicon.svg" />
      </Head>
      <MainHeader />
      <Component {...pageProps} />
    </>
  );
}
