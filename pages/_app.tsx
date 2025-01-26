import "@/styles/app/reset.css";
import type { AppProps } from "next/app";
import Loading from "@/components/app/Loading";
import ScrollToTop from "@/components/app/ScrollToTop";
import Head from "next/head";
import { useLoading } from "@/hooks/useLoading";

export default function App({ Component, pageProps }: AppProps) {
  const { loading } = useLoading();

  return (
    <>
      <Head>
        <link rel="icon" href="/assets/images/meta/favicon.ico" />
      </Head>
      <ScrollToTop />
      {loading ? <Loading /> : <Component {...pageProps} />}
    </>
  );
}
