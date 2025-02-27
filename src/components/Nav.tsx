import styles from "./Nav.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <Link className={styles.logo} href="/">
        <Image
          className={styles.logoImage}
          src="/image/NavLogo.svg"
          width={153}
          height={51}
          alt="로고"
        />
      </Link>
      <div className={styles.nav_center}>
        <button className={styles.nav_button} type="button">
          자유게시판
        </button>
        <Link href="/items">
          <button className={styles.nav_button} type="button">
            중고마켓
          </button>
        </Link>
      </div>
      <Link className={styles.nav_user} href="/">
        <Image
          src="/image/NavUser.svg"
          width={40}
          height={40}
          alt="유저프로필"
        />
      </Link>
    </div>
  );
}
