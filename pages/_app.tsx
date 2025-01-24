import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/layout/Header";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <title>Panda Market</title>
      <link rel="icon" href="@/public/logo/favicon.ico" />
      <Component {...pageProps} />
    </>
  );
}
