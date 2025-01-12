import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoSymbol from "@/public/images/logo/symbol-logo.svg";
import LogoText from "@/public/images/logo/text-logo.svg";
import ProfileIcon from "@/public/images/icons/ic-profile.svg";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.itemsHeader}>
      <div className={styles.headerLeft}>
        <Link href="/" className={styles.headerLogo}>
          <Image
            src={LogoSymbol}
            alt="판다마켓 심볼 로고"
            className={styles.logoSymbol}
          />
          <Image
            src={LogoText}
            alt="판다마켓 로고"
            className={styles.logoText}
          />
        </Link>

        <nav>
          <ul>
            <li>
              <Link href="/communityFeed">자유게시판</Link>
            </li>
            <li>
              <Link href="/items">중고마켓</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.headerProfile}>
        <Image src={ProfileIcon} alt="마이 페이지" />
      </div>
    </header>
  );
};

export default Header;
