import { PropsWithChildren } from "react";
import { Header, Logo, Nav, Util } from "@components/Header";
import { Footer } from "@components/Footer";
import styles from "./layout.module.css";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header>
        <Logo />
        <Nav />
        <Util />
      </Header>
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
