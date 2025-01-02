import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import { Header, Logo, Nav, Util } from "@components/Header";
import { Footer } from "@components/Footer";
import styles from "./Layout.module.scss";
import { LoadingSpinner } from "@components/ui";

interface LayoutProps {
  hasNav?: boolean;
  hasFooter?: boolean;
}

export function Layout({ hasNav = false, hasFooter = false }: LayoutProps) {
  const navigation = useNavigation();

  return (
    <>
      {navigation.state === "loading" && <LoadingSpinner />}
      <Header>
        <Logo />
        {hasNav && <Nav />}
        <Util />
      </Header>
      <main className={styles.main}>
        <Outlet />
      </main>
      {hasFooter && <Footer />}
      <ScrollRestoration />
    </>
  );
}
