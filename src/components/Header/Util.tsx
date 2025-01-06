"use client";

import { useAuth } from "@context/AuthContext";
import { Button } from "@components/ui";
import { Profile } from "@components/Header";
import styles from "./Util.module.scss";

export function Util() {
  const {
    auth: { user },
    handleLogout,
  } = useAuth();

  return (
    <div className={styles.util}>
      {user ? (
        <Profile user={user} onLogout={handleLogout} />
      ) : (
        <Button href="/login" size="sm-48" className={styles["login-btn"]}>
          로그인
        </Button>
      )}
    </div>
  );
}
