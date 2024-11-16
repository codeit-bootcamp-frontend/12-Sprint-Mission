import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export default function Button({
  to,
  className,
  children,
  size = "",
  ...props
}) {
  const css = `${styles.btn} ${size && styles[`btn-${size}`]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={css} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className={css} {...props}>
      {children}
    </button>
  );
}
