import { PropsWithChildren } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@assets/img/common/logo_full.svg";
import Oauth from "./Oauth";
import styles from "./AuthContainer.module.scss";

interface AuthContainerProps extends PropsWithChildren {
  mode?: "login" | "signup";
}

export default function AuthContainer({
  children,
  mode = "login",
}: AuthContainerProps) {
  return (
    <>
      <div className={styles["auth-container"]}>
        <div className={styles["auth-header"]}>
          <div className={styles["auth-logo"]}>
            <Link href="/">
              <Image src={logo} alt="판다마켓" />
            </Link>
          </div>
        </div>
        <div className={styles["auth-body"]}>{children}</div>
        <div className={styles["auth-footer"]}>
          <Oauth />
          <div className={styles["auth-options"]}>
            {mode === "login" ? (
              <>
                판다마켓이 처음이신가요? <Link href="/signup">회원가입</Link>
              </>
            ) : (
              <>
                이미 회원이신가요? <Link href="/login">로그인</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
