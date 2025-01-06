import { ReactNode } from "react";
import styles from "./Section.module.scss";

export function Section({ children }: { children: ReactNode }) {
  return <section className={styles.section}>{children}</section>;
}

function Header({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </header>
  );
}

function Content({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

function Footer({ children }: { children: ReactNode }) {
  return <div className={styles.footer}>{children}</div>;
}

Section.Header = Header;
Section.Content = Content;
Section.Footer = Footer;
