import type { AppProps } from "next/app";
import "@/src/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>판다마켓</title>
        <link rel="icon" href="/images/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
