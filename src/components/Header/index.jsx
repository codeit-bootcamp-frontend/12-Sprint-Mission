import Button from "../Button";
import Logo from "./Logo";
import Nav from "./Nav";
import styles from "./styles.module.scss";

export default function Header({ showNav = false }) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Logo />
        {showNav && <Nav />}
        <div className={styles.util}>
          <Button to="/login" size="sm-48" className={styles["login-btn"]}>
            로그인
          </Button>
        </div>
      </nav>
    </header>
  );
}
