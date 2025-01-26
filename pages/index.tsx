import Head from "next/head";
import HomePage from "./home";

export default function Home() {
  return (
    <>
      <Head>
        <title>판다마켓</title>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge;chrome=35+" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no, viewport-fit=cover"
        />
        <meta
          property="og:url"
          content="https://y5037-pandamarket.netlify.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="판다 마켓" />
        <meta
          property="og:description"
          content="일상의 모든 물건을 거래해보세요"
        />
        <meta property="og:image" content="/assets/images/meta/thumbnail.png" />
        <meta
          property="og:image:type"
          content="/assets/images/meta/thumbnail.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <HomePage />
    </>
  );
}
