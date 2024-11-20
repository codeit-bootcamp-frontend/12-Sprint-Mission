import clsx from "clsx";
import styles from "./styles.module.scss";

export default function LoadingSpinner({ position = "fixed", light }) {
  return (
    <div
      className={clsx(
        styles.container,
        styles[position],
        light && styles.light
      )}
    >
      <div className={styles.loader}></div>
    </div>
  );
}
