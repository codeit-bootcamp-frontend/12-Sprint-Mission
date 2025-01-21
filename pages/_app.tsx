import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <title>Panda Market</title>
      <link rel="icon" href="@/public/logo/favicon.ico" />
      <Component {...pageProps} />
    </>
  );
}
