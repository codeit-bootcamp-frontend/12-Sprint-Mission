import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.css";
import Logo from "@/public/logo/logo.svg";

function getLinkStyle(path, currentPath) {
  return path === currentPath ? { color: "var(--blue)" } : {};
}

function Header() {
  const router = useRouter();

  return (
    <header className={styles.globalHeader}>
      <div className={styles.headerLeft}>
        <Link href="/" className={styles.headerLogo}>
          <img src={Logo} alt="판다마켓 로고" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link
                style={getLinkStyle("/boards", router.pathname)}
                href="/boards"
              >
                자유게시판
              </Link>
            </li>
            <li>
              <Link
                style={
                  router.pathname === "/additem" || router.pathname === "/items"
                    ? { color: "var(--blue)" }
                    : {}
                }
                href="/items"
              >
                중고마켓
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Link className={`${styles.loginLink} button`} href="/login">
        로그인
      </Link>
    </header>
  );
}

export default Header;
