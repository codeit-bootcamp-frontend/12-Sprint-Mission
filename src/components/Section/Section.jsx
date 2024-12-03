import styles from "./Section.module.scss";

export function Section({ children }) {
  return <section className={styles.section}>{children}</section>;
}

function Header({ title, children }) {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </header>
  );
}

function Content({ children }) {
  return <>{children}</>;
}

Section.Header = Header;
Section.Content = Content;
