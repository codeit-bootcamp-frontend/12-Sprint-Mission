import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.itemsHeader}>
      <div className={styles.headerLeft}>
        <Link href="/" className={styles.headerLogo}>
          <img
            src="/images/logo/symbol-logo.svg"
            alt="판다마켓 심볼 로고"
            className={styles.logoSymbol}
          />
          <img
            src="/images/logo/text-logo.svg"
            alt="판다마켓 로고"
            className={styles.logoText}
          />
        </Link>

        <nav>
          <ul>
            <li>
              <Link href="/boards">자유게시판</Link>
            </li>
            <li>
              <Link href="/items">중고마켓</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.headerProfile}>
        <img src="/images/icons/ic-profile.svg" alt="마이 페이지" />
      </div>
    </header>
  );
};

export default Header;
