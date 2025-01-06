import { PropsWithChildren } from "react";
import { Header, Logo, Util } from "@components/Header";

import styles from "./layout.module.css";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header>
        <Logo />
        <Util />
      </Header>
      <main className={styles.main}>{children}</main>
    </>
  );
}
