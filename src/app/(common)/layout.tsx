import { PropsWithChildren } from "react";
import { Header, Logo, Nav, Util } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
