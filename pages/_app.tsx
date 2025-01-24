import "@/styles/app/reset.css";
import type { AppProps } from "next/app";
import { Suspense } from "react";
import Loading from "@/components/app/Loading";
import ScrollToTop from "@/components/app/ScrollToTop";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/images/meta/favicon.ico" />
      </Head>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Component {...pageProps} />
      </Suspense>
    </>
  );
}
