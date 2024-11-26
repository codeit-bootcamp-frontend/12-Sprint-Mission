import styles from "./styles.module.scss";

export default function PageContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}
