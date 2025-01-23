import { useState, useEffect } from "react";
// 479, 767, 1023

type MediaQuery = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

export function useMediaQuery(): MediaQuery {
  const [pageSize, setPageSize] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  const updatePageSize = () => {
    const width = window.innerWidth;

    setPageSize({
      isMobile: width < 480,
      isTablet: width >= 480 && width < 768,
      isDesktop: width >= 768,
    });
  };
  // 추후 디바운스 활용해서 최적화 도전(공부필요).
  useEffect(() => {
    updatePageSize();

    const handleResize = () => updatePageSize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return pageSize;
}
