import { Logo, Nav, Util } from "@components/Header";
import styles from "./Header.module.scss";

export function Header({ showNav = false }) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Logo />
        {showNav && <Nav />}
        <Util />
      </nav>
    </header>
  );
}
