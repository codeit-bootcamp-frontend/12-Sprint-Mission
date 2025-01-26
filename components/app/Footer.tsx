import styles from "../../styles/app/footer.module.css";
import IconInsta from "@/public/assets/images/app/home/ic_instagram.svg";
import IconFacebook from "@/public/assets/images/app/home/ic_facebook.svg";
import IconYoutube from "@/public/assets/images/app/home/ic_youtube.svg";
import IconTwitter from "@/public/assets/images/app/home/ic_twitter.svg";
import Link from "next/link";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrap}>
        <p className={styles.copyright}>&copy;codeit - 2024</p>
        <div className={styles.btnLink}>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/faq">FAQ</Link>
        </div>
        <ul className={styles.socialBox}>
          <li>
            <Link
              href="https://www.facebook.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <IconFacebook />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.twitter.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <IconTwitter />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.youtube.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <IconYoutube />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <IconInsta />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
