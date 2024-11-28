import { Link } from "react-router-dom";
import logoPC from "@assets/img/common/logo_full.svg";
import logoMobile from "@assets/img/common/logo_text.svg";
import styles from "./Logo.module.scss";

export function Logo() {
  return (
    <h1 className={styles.logo}>
      <Link to="/">
        <img className={styles["logo-pc"]} src={logoPC} alt="판다마켓" />
        <img
          className={styles["logo-mobile"]}
          src={logoMobile}
          alt="판다마켓"
        />
      </Link>
    </h1>
  );
}
