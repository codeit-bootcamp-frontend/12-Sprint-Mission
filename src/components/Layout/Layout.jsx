import { Outlet } from "react-router-dom";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import styles from "./Layout.module.scss";

export function Layout({ hasNav = false, hasFooter = false }) {
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
