import styles from "./Message.module.scss";

export function Message({ icon, alt = "", children }) {
  return (
    <div className={styles.message}>
      {icon && <img src={icon} className={styles.icon} alt={alt} />}
      {children}
    </div>
  );
}
