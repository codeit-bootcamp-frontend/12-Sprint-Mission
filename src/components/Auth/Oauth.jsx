import googleIcon from "../../assets/img/icon/icon_google.svg";
import kakaoIcon from "../../assets/img/icon/icon_kakao.svg";
import styles from "./Oauth.module.scss";

export default function Oauth() {
  return (
    <div className={styles["oauth-container"]}>
      <div className={styles["oauth-label"]}>간편 로그인하기</div>
      <ul className={styles["oauth-providers"]}>
        <li>
          <a
            href="https://www.google.com/"
            className={styles["oauth-provider"]}
            target="_blank"
            rel="noopener noreferrer"
            title="구글로그인 새창열기"
            aria-label="구글로 로그인하기"
          >
            <img src={googleIcon} alt="구글로 로그인하기" />
          </a>
        </li>
        <li>
          <a
            href="https://www.kakaocorp.com/page/"
            className={styles["oauth-provider"]}
            target="_blank"
            rel="noopener noreferrer"
            title="카카오로그인 새창열기"
            aria-label="카카오로 로그인하기"
          >
            <img src={kakaoIcon} alt="카카오로 로그인하기" />
          </a>
        </li>
      </ul>
    </div>
  );
}
