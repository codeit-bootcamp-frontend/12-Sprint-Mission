import { Router } from "next/router";
import { useEffect, useState } from "react";

export const useLoading = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    const start = () => {
      // 시작 시 타이머 설정
      timer = setTimeout(() => {
        setLoading(true);
      }, 500); // 0.5초 후 로딩 상태를 결정
    };

    const end = () => {
      // 끝나면 타이머 클리어
      clearTimeout(timer);
      setLoading(false);
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
      clearTimeout(timer);
    };
  }, []);

  return { loading };
};
