import Nav from "./Nav";
import styles from "./App.module.css";

function App({ children }) {
  return (
    <>
      <Nav className={styles.nav} />
      <div className={styles.body}>{children}</div>
    </>
  );
}

export default App;
