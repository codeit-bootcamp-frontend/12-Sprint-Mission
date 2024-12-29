import clsx from "clsx";
import styles from "./LoadingSpinner.module.scss";

interface LoadingSpinnerProps {
  position?: "fixed" | "absolute";
  light?: boolean;
}

export function LoadingSpinner({
  position = "fixed",
  light,
}: LoadingSpinnerProps) {
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
