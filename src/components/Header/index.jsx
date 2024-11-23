import { useAuth } from "@context/useAuth";
import Logo from "./Logo";
import Nav from "./Nav";
import Util from "./Util";
import styles from "./styles.module.scss";

export default function Header({ showNav = false }) {
  const {
    auth: { user },
    handleLogout,
  } = useAuth();
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
