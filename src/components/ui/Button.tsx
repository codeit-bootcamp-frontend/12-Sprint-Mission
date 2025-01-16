import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";
import Link, { LinkProps } from "next/link";

interface BaseButtonProps extends PropsWithChildren {
  href?: string;
  size?: "sm" | "sm-48" | "md" | "lg" | "xl";
  variant?: "solid" | "outlined" | "text";
  color?: "primary" | "secondary" | "error";
  className?: string;
}
type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & BaseButtonProps;
type ButtonAsLink = LinkProps & BaseButtonProps;
type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  href,
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

  if (href) {
    return (
      <Link
        href={href}
        className={css}
        {...(props as Omit<ButtonAsLink, "href">)}
      >
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
