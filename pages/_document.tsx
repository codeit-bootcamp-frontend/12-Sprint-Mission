// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta charSet="utf-8" />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
        <meta name="description" content="일상의 모든 물건을 거래해보세요" />
        <meta property="og:title" content="판다 마켓" />
        <meta
          property="og:description"
          content="일상의 모든 물건을 거래해보세요"
        />
        <meta
          property="og:url"
          content="https://fe-12-kimkyungki.netlify.app"
        />
        <meta
          property="og:image"
          content="https://fe-12-kimkyungki.netlify.app/images/Img_home_01.png"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="판다 마켓" />
        <meta
          name="twitter:description"
          content="일상의 모든 물건을 거래해보세요"
        />
        <meta
          name="twitter:image"
          content="https://fe-12-kimkyungki.netlify.app/images/Img_home_01.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
