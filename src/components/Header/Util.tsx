import { Button } from "@components/ui";
import { Profile } from "@components/Header";
import styles from "./Util.module.scss";
import { auth } from "@/app/api/auth/auth";

export async function Util() {
  const session = await auth();

  return (
    <div className={styles.util}>
      {session?.user ? (
        <Profile
          nickname={session?.user.nickname || ""}
          image={session?.user.image || ""}
        />
      ) : (
        <Button href="/login" size="sm-48" className={styles["login-btn"]}>
          로그인
        </Button>
      )}
    </div>
  );
}
