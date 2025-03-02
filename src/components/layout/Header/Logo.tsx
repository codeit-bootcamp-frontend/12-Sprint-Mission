import Link from "next/link";
import Image from "next/image";
import logoPC from "@assets/img/common/logo_full.svg";
import logoMobile from "@assets/img/common/logo_text.svg";
import styles from "./Logo.module.scss";

export function Logo() {
  return (
    <h1 className={styles.logo}>
      <Link href="/">
        <Image className={styles["logo-pc"]} src={logoPC} alt="판다마켓" />
        <Image
          className={styles["logo-mobile"]}
          src={logoMobile}
          alt="판다마켓"
        />
      </Link>
    </h1>
  );
}
