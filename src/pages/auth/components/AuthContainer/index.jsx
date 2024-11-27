import { Link } from "react-router-dom";
import logo from "@assets/img/common/logo_full.svg";
import LoadingSpinner from "@components/LoadingSpinner";
import Oauth from "../Oauth";
import styles from "./styles.module.scss";

export default function AuthContainer({
  children,
  mode = "login",
  isLoading,
  error,
  onSubmit,
}) {
  return (
    <>
      {isLoading && <LoadingSpinner />}
      <div className={styles["auth-container"]}>
        <div className={styles["auth-header"]}>
          <div className={styles["auth-logo"]}>
            <Link to="/">
              <img src={logo} alt="판다마켓" />
            </Link>
          </div>
        </div>
        <div className={styles["auth-body"]}>
          <form onSubmit={onSubmit}>{children}</form>
          {error && (
            <div className={styles.error}>
              {error.message || "오류가 발생했습니다."}
            </div>
          )}
        </div>
        <div className={styles["auth-footer"]}>
          <Oauth />
          <div className={styles["auth-options"]}>
            {mode === "login" ? (
              <>
                판다마켓이 처음이신가요? <Link to="/signup">회원가입</Link>
              </>
            ) : (
              <>
                이미 회원이신가요? <Link to="/login">로그인</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
