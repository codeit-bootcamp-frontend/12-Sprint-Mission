import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "./Button.module.scss";

export function Button({ to, className, children, size, color, ...props }) {
  const css = clsx(
    styles.btn,
    size && styles[`btn-${size}`],
    color && styles[color],
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
