import { ButtonHTMLAttributes } from "react";
import { Link, LinkProps, To } from "react-router-dom";
import clsx from "clsx";
import styles from "./Button.module.scss";

interface BaseButtonProps {
  to?: To;
  size?: "sm" | "sm-48" | "md" | "lg" | "xl";
  variant?: "solid" | "outlined" | "text";
  color?: "primary" | "secondary" | "error";
}
type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & BaseButtonProps;
type ButtonAsLink = LinkProps & BaseButtonProps;
type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  to,
  className,
  children,
  size = "sm",
  variant = "solid",
  color = "primary",
  ...props
}: ButtonProps) {
  const css = clsx(
    styles.btn,
    variant && styles[variant],
    color && styles[color],
    size && styles[size],
    className
  );

  if (to) {
    return (
      <Link to={to} className={css} {...(props as Omit<ButtonAsLink, "to">)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={css} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
