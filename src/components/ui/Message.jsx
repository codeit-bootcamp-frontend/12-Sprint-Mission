import clsx from "clsx";
import styles from "./Message.module.scss";

export function Message({ icon, alt = "", compact = false, children }) {
  const css = clsx(styles.message, compact && styles.compact);
  return (
    <div className={css}>
      {icon && <img src={icon} className={styles.icon} alt={alt} />}
      {children}
    </div>
  );
}
