import styles from "./styles.module.scss";

export default function Input({
  type = "text",
  id,
  label,
  error,
  value,
  ...props
}) {
  const valid = value && !error;
  return (
    <div className={styles["form-item"]}>
      <label className={styles["item-label"]} htmlFor={id}>
        {label}
      </label>
      <div className={styles["item-field"]}>
        <input
          type={type}
          className={`${styles["input-box"]} ${valid ? styles.valid : ""}`}
          value={value}
          {...props}
        />
      </div>
      {error && <div className={styles["item-error"]}>{error}</div>}
    </div>
  );
}
