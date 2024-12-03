import styles from "./Loading.module.scss";

export function Loading({ children }) {
  return <div className={styles.loading}>{children}</div>;
}
