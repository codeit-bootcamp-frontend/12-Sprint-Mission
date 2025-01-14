import { Link } from "react-router-dom";
import styles from "../../styles/app/footer.module.css";
import iconInsta from "../../assets/images/app/home/ic_instagram.svg";
import iconFacebook from "../../assets/images/app/home/ic_facebook.svg";
import iconYoutube from "../../assets/images/app/home/ic_youtube.svg";
import iconTwitter from "../../assets/images/app/home/ic_twitter.svg";

function Footer() {
  return (
    <footer>
      <div className={styles.footerWrap}>
        <p className={styles.copyright}>&copy;codeit - 2024</p>
        <div className={styles.btnLink}>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/faq">FAQ</Link>
        </div>
        <ul className={styles.socialBox}>
          <li onClick={() => window.open("https://www.facebook.com/")}>
            <img src={iconFacebook} alt="Facebook" />
          </li>
          <li onClick={() => window.open("https://www.twitter.com/")}>
            <img src={iconTwitter} alt="Twitter" />
          </li>
          <li onClick={() => window.open("https://www.youtube.com/")}>
            <img src={iconYoutube} alt="Youtube" />
          </li>
          <li onClick={() => window.open("https://www.instagram.com/")}>
            <img src={iconInsta} alt="Instagram" />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
