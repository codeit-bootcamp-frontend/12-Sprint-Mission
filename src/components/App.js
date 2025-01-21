import Nav from "./Nav";
import styles from "./App.module.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Nav className={styles.nav} />
      <div className={styles.body}>
        <Outlet />
      </div>
    </>
  );
}

export default App;
