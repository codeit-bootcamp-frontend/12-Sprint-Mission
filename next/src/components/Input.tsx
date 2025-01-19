import styles from "./Input.module.css";

export default function Input({ value, placeholder }) {
  return (
    <input className={styles.input} value={value} placeholder={placeholder} />
  );
}
