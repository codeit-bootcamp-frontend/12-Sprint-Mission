import Link from "next/link";
import styles from "./header-layout.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function HeaderLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, [router.pathname]);

  const onLogout: React.MouseEventHandler<HTMLDivElement> = () => {
    const result = confirm("로그아웃 하시겠습니까?");
    if (result) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
      setIsLoggedIn(false);
    } else {
      return;
    }
  };

  return (
    <header className={styles.header}>
      <div className="inner">
        <div className={styles.logo}>
          <a href="/">
            <img
              className={styles.mo}
              src="/assets/img/logo_text.svg"
              alt="판다마켓 로고"
            />
            <img
              className={styles.pc}
              src="/assets/img/logo.svg"
              alt="판다마켓 로고"
            />
          </a>
        </div>
        <ul className={styles.menu}>
          <li>
            <Link href="/boards">자유게시판</Link>
          </li>
          <li>
            <Link href="">중고마켓</Link>
          </li>
        </ul>
        {isLoggedIn ? (
          <div className={styles.my} onClick={onLogout}>
            <img src="/assets/img/icon_my.svg" alt="마이페이지" />
          </div>
        ) : (
          <Link href="/login" className={`btn ${styles.my}`}>
            로그인
          </Link>
        )}
      </div>
    </header>
  );
}
