import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./styles.module.scss";

export default function Layout({ hasNav = false, hasFooter = false }) {
  return (
    <>
      <Header showNav={hasNav} />
      <main className={styles.main}>
        <Outlet />
      </main>
      {hasFooter && <Footer />}
    </>
  );
}
