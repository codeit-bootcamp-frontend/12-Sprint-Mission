import Link from "next/link";
import styles from "./header-layout.module.css";

export default function HeaderLayout() {
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
        <Link className={styles.my} href="">
          <img src="/assets/img/icon_my.svg" alt="마이페이지" />
        </Link>
      </div>
    </header>
  );
}
