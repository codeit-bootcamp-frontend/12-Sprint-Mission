import styles from "./styles.module.scss";

export default function Section({ title, children, filter }) {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {filter}
      </header>
      {children}
    </section>
  );
}
