import { ReactNode } from "react";
import styles from "./Header.module.scss";

export function Header({ children }: { children: ReactNode }) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>{children}</nav>
    </header>
  );
}
