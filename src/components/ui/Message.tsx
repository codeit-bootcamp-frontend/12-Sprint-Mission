import Image from "next/image";
import { ReactNode } from "react";
import clsx from "clsx";
import styles from "./Message.module.scss";

interface MessageProps {
  icon?: string;
  alt?: string;
  compact?: boolean;
  children: ReactNode;
}

export function Message({
  icon,
  alt = "",
  compact = false,
  children,
}: MessageProps) {
  const css = clsx(styles.message, compact && styles.compact);
  return (
    <div className={css}>
      {icon && <Image src={icon} className={styles.icon} alt={alt} />}
      {children}
    </div>
  );
}
