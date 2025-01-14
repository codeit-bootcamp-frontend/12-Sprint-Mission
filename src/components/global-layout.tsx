import { ReactNode } from "react";
import style from "./global-layout.module.css";
import Header from "./Header";

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className={style.main}>{children}</main>
    </>
  );
}
