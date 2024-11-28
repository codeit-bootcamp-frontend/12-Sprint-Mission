import styles from "./PageWrapper.module.scss";

export function PageWrapper({ children }) {
  return <div className={styles.container}>{children}</div>;
}
