import styles from "./MainFooter.module.css";
import Icon from "../../../components/Icon/Icon";
import clsx from "clsx";

const MainFooter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.text}>@codeit - 2024</p>
        <div className={styles["policy-link"]}>
          <a className={clsx(styles.text, styles.link)} href="#">
            Privacy Policy
          </a>

          <a className={clsx(styles.text, styles.link)} href="#">
            FAQ
          </a>
        </div>
        <ul className={styles["sns-list"]}>
          <li>
            <Icon name="facebook" size={20} color="white" />
          </li>
          <li>
            <Icon name="twitter" size={20} color="white" />
          </li>
          <li>
            <Icon name="youtube" size={20} color="white" />
          </li>
          <li>
            <Icon name="instagram" size={20} color="white" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainFooter;
