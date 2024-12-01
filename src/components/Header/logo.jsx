import React, { useEffect, useState } from "react";
import logoImg from "../../assets/img/logo/logo.png"; // 이미지 파일 경로
import styles from "./styles.module.css"; // 스타일 파일 경로
import { Link } from "react-router-dom"; // Link import

function Logo() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 창 크기 변경에 따라 상태 업데이트
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // 최초 실행 시 창 크기 확인
    handleResize();

    // resize 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);

    // 컴포넌트 언마운트 시 이벤트 리스너 정리
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.logo}>
      {!isMobile && (
        <img
          className={styles["header-bar img"]}
          src={logoImg}
          alt="판다마켓로고"
        />
      )}
      <h1 className={styles["logo-title"]}>
        <Link to="/">판다마켓</Link>
      </h1>
      <div className={styles.menu}>
        <Link to="/board" className={styles["menuText"]}>
          자유게시판
        </Link>
        <Link to="/items" className={styles["menuText"]}>
          중고마켓
        </Link>
      </div>
    </div>
  );
}

export default Logo;
