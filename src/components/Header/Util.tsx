"use client";

import { Button } from "@components/ui";
import { Profile } from "@components/Header";
import styles from "./Util.module.scss";
import { useSession } from "next-auth/react";

export function Util() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className={styles.util}>
        <Button href="/login" size="sm-48" className={styles["login-btn"]}>
          로그인
        </Button>
      </div>
    );
  }

  const { nickname, image } = session.user;

  return (
    <div className={styles.util}>
      <Profile nickname={nickname} image={image || ""} />
    </div>
  );
}
