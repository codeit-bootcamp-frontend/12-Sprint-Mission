import styles from "./styles.module.scss";

export default function Message({ children }) {
  return <div className={styles.message}>{children}</div>;
}
