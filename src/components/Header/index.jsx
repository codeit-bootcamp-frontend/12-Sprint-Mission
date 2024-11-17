import { useAuth } from "../../context/useAuth";
import Button from "../Button";
import Logo from "./Logo";
import Nav from "./Nav";
import Profile from "./Profile";
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
        <div className={styles.util}>
          {user ? (
            <Profile user={user} onLogout={handleLogout} />
          ) : (
            <Button to="/login" size="sm-48" className={styles["login-btn"]}>
              로그인
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
}
