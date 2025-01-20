import { useState, useEffect } from "react";
import { debounce } from "lodash"; // lodash에서 debounce 임포트

const windowView = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleWindowResize = debounce(() => {
      setWidth(window.innerWidth); // 화면 크기 변경 시 width 업데이트
    }, 200); // 200ms 후에만 실행되도록 설정

    handleWindowResize(); // 초기값 설정
    window.addEventListener("resize", handleWindowResize); // resize 이벤트 리스너 추가

    return () => window.removeEventListener("resize", handleWindowResize); // 컴포넌트 언마운트 시 이벤트 리스너 제거
  }, []);

  return width;
};

export default windowView;
