import { ReactNode } from "react";
import Header from "./Header";

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
    </>
  );
}
