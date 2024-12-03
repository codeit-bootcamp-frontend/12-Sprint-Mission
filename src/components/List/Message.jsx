import styles from "./Message.module.scss";

export function Message({ children }) {
  return <div className={styles.message}>{children}</div>;
}
