import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "./Button.module.scss";

export function Button({
  to,
  className,
  children,
  size = "sm",
  variant = "solid",
  color = "primary",
  ...props
}) {
  const css = clsx(
    styles.btn,
    color && styles[variant],
    color && styles[color],
    size && styles[size],
    className
  );
  const Component = to ? Link : "button";
  const ComponentProps = {
    className: css,
    ...(to && { to }),
    ...(Component === "button" && { type: "button" }),
    ...props,
  };

  return <Component {...ComponentProps}>{children}</Component>;
}
