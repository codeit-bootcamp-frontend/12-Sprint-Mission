import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import styles from "./Layout.module.scss";
import { LoadingSpinner } from "@components/ui";

export function Layout({ hasNav = false, hasFooter = false }) {
  const navigation = useNavigation();

  return (
    <>
      {navigation.state === "loading" && <LoadingSpinner />}
      <Header showNav={hasNav} />
      <main className={styles.main}>
        <Outlet />
      </main>
      {hasFooter && <Footer />}
    </>
  );
}
