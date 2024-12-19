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
    <input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className={clsx(styles.input, className)}
    >
      {children}
    </input>
  );
};

export default Input;
