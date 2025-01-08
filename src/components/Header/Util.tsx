"use client";

import { Button } from "@components/ui";
import { Profile } from "@components/Header";
import styles from "./Util.module.scss";
import { useAuth } from "@/context/AuthContext";

export function Util() {
  const { user } = useAuth();

  return (
    <div className={styles.util}>
      {user ? (
        <Profile nickname={user.nickname || ""} image={user.image || ""} />
      ) : (
        <Button href="/login" size="sm-48" className={styles["login-btn"]}>
          로그인
        </Button>
      )}
    </div>
  );
}
