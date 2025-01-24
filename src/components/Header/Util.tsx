import { Button } from "@components/ui";
import { Profile } from "@components/Header";
import styles from "./Util.module.scss";
import { auth } from "@/auth";
import { getUser } from "@/service/user";

export async function Util() {
  const session = await auth();

  if (!session) {
    return (
      <div className={styles.util}>
        <Button href="/login" size="sm-48" className={styles["login-btn"]}>
          로그인
        </Button>
      </div>
    );
  }

  const { nickname, image } = await getUser();

  return (
    <div className={styles.util}>
      <Profile nickname={nickname || ""} image={image || ""} />
    </div>
  );
}
