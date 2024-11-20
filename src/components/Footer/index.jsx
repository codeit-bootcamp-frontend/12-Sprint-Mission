import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

import facebookIcon from "@assets/img/icon/icon_facebook.svg";
import twitterIcon from "@assets/img/icon/icon_twitter.svg";
import youtubeIcon from "@assets/img/icon/icon_youtube.svg";
import instagramIcon from "@assets/img/icon/icon_instagram.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.copyright}>©codeit - 2024</div>
        <nav className={styles["footer-nav"]}>
          <ul className={styles["footer-nav-list"]}>
            <li>
              <Link to="/privacy" className={styles["nav-item"]}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/faq" className={styles["nav-item"]}>
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
        <ul className={styles["sns-list"]}>
          <li>
            <a
              href="https://www.facebook.com/"
              className={styles["sns-item"]}
              target="_blank"
              aria-label="페이스북 새창열기"
              title="페이스북 새창열기"
              rel="noopener noreferrer"
            >
              <img src={facebookIcon} alt="페이스북 새창열기" />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/"
              className={styles["sns-item"]}
              target="_blank"
              aria-label="트위터 새창열기"
              title="트위터 새창열기"
              rel="noopener noreferrer"
            >
              <img src={twitterIcon} alt="트위터 새창열기" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/"
              className={styles["sns-item"]}
              target="_blank"
              aria-label="유튜브 새창열기"
              title="유튜브 새창열기"
              rel="noopener noreferrer"
            >
              <img src={youtubeIcon} alt="유튜브 새창열기" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              className={styles["sns-item"]}
              target="_blank"
              aria-label="인스타그램 새창열기"
              title="인스타그램 새창열기"
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="인스타그램 새창열기" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
