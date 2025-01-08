import { ReactNode } from "react";
import styles from "./Badge.module.scss";

interface BadgeProps {
  label: string;
  icon: ReactNode;
}

export function Badge({ label, icon }: BadgeProps) {
  return (
    <span className={styles.badge}>
      {icon}
      {label}
    </span>
  );
}
