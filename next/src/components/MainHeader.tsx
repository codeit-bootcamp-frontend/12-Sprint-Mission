import Link from "next/link";
import Image from "next/image";
import styles from "./MainHeader.module.css";

export default function MainHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="로고이미지"
            width={153}
            height={51}
          />
        </Link>
        <div className={styles.navList}>
          <Link className={styles.link} href="/">
            자유게시판
          </Link>
          <Link className={styles.link} href="/">
            중고마켓
          </Link>
        </div>
      </div>
      <Image
        src="/images/profile.svg"
        alt="프로필이미지"
        width={40}
        height={40}
      />
    </div>
  );
}
