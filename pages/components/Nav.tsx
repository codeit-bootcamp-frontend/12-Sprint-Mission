import React from "react";
import Link from "next/link";
import PandaLogo from "../assets/logo/logo.png";
import Profile from "../assets/icon/ic_profile.png";
import styles from "@/styles/nav.module.css";
import Image from "next/image";

const Nav: React.FC = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.nav}>
        <div className={styles.menu}>
          <Link href="/">
            <Image src={PandaLogo} alt="판다로고" className={styles.logo} />
          </Link>
          <div>
            <Link href="/boards" className={styles.link}>
              자유게시판
            </Link>
          </div>
          <div>
            <Link href="/items" className={styles.link}>
              중고마켓
            </Link>
          </div>
        </div>
        <Link href="/" className={styles.profile}>
          <Image src={Profile} alt="프로필" className={styles.profileIcon} />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
