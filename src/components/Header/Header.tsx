import { Logo, Nav, Util } from "@components/Header";
import styles from "./Header.module.scss";

interface HeaderProps {
  showNav?: boolean;
}

export function Header({ showNav = false }: HeaderProps) {
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
