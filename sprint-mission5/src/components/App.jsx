import Nav from "../components/Nav";
import styles from "./App.module.css";

function App({ children }) {
  return (
    <>
      <Nav />
      <div className={styles.body}>{children}</div>
    </>
  );
}

export default App;
