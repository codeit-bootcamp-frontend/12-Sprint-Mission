import styles from "./styles.module.scss";

export default function FieldContainer({ id, label, error, children }) {
  return (
    <div className={styles["form-item"]}>
      <label className={styles["item-label"]} htmlFor={id}>
        {label}
      </label>
      <div className={styles["item-field"]}>{children}</div>
      {error && <div className={styles["item-error"]}>{error}</div>}
    </div>
  );
}
