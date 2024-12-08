import clsx from "clsx";
import { Error } from "@components/Field";
import styles from "./Input.module.scss";

export function Textarea({ error, value, size, ...props }) {
  const valid = value && !error;
  const css = clsx(
    styles["field-box"],
    size && styles[size],
    valid && styles.valid,
    error && styles.error
  );

  return (
    <>
      <div className={styles.field}>
        <textarea className={css} value={value} {...props} />
      </div>
      <Error error={error} />
    </>
  );
}
