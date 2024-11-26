import { useAuth } from "@context/useAuth";
import Button from "@components/Button";
import Profile from "@components/Header/Profile";
import styles from "./styles.module.scss";

export default function Util() {
  const {
    auth: { user },
    handleLogout,
  } = useAuth();

  return (
    <div className={styles.util}>
      {user ? (
        <Profile user={user} onLogout={handleLogout} />
      ) : (
        <Button to="/login" size="sm-48" className={styles["login-btn"]}>
          로그인
        </Button>
      )}
    </div>
  );
}
