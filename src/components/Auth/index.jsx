import Oauth from "./Oauth";
import logo from "../../assets/img/common/logo_full.svg";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export default function AuthContainer({ children, mode = "login" }) {
  return (
    <div className={styles["auth-container"]}>
      <div className={styles["auth-header"]}>
        <div className={styles["auth-logo"]}>
          <Link to="/">
            <img src={logo} alt="판다마켓" />
          </Link>
        </div>
      </div>
      <div className={styles["auth-body"]}>{children}</div>
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
  );
}
