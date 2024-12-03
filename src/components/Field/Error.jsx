import styles from "./Error.module.scss";

export function Error({ error }) {
  if (!error) {
    return null;
  }
  return (
    <div className={styles["item-error"]}>
      {error || "오류가 발생했습니다."}
    </div>
  );
}
