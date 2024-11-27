import styles from "./styles.module.scss";

export default function ProductFilter({ search, action, filter }) {
  return (
    <>
      <div className={styles.search}>{search}</div>
      <div className={styles.button}>{action}</div>
      <div className={styles.select}>{filter}</div>
    </>
  );
}
