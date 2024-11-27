import styles from "./styles.module.scss";

export default function FieldItem({ children }) {
  return <div className={styles["form-item"]}>{children}</div>;
}

function Label({ htmlFor, children }) {
  return (
    <label className={styles["item-label"]} htmlFor={htmlFor}>
      {children}
    </label>
  );
}

FieldItem.Label = Label;
