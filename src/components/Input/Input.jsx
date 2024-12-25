import clsx from "clsx";
import styles from "./Input.module.css";

const Input = ({
  value,
  onChange,
  children,
  type = "text",
  placeholder = "입력",
  className,
  ...props
}) => {
  return (
    <div className={clsx(styles.inputWrapper, className)}>
      <input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className={styles.input}
        {...props}
      />
      {children && <div className={styles.iconWrapper}>{children}</div>}
    </div>
  );
};

export default Input;
