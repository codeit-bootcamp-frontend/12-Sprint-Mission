import React from "react";
import { Link } from "react-router-dom";
import PandaLogo from "../asset/logo/logo.png";
import Profile from "../asset/icon/ic_profile.png";
import styles from "./nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.menu}>
        <Link to="/">
          <img src={PandaLogo} alt="판다로고" className={styles.logo} />
        </Link>
        <div>
          <Link to="/" className={styles.link}>
            자유게시판
          </Link>
        </div>
        <div>
          <Link to="/" className={styles.link}>
            중고마켓
          </Link>
        </div>
      </div>
      <Link to="/" className={styles.profile}>
        <img src={Profile} alt="프로필" className={styles.profileIcon} />
      </Link>
    </nav>
  );
}

export default Nav;
