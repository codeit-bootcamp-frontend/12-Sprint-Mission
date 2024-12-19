import styles from "./LinkButton.module.css";
import clsx from "clsx";

const LinkButton = ({
  onClick,
  children,
  className,
  disabled = false,
  size,
  color = "primary",
  ...props
}) => {
  console.log(styles);
  return (
    <button
      className={clsx(styles.button, styles[size], styles[color], className)}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default LinkButton;
