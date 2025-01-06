import { ReactNode } from "react";
import styles from "./Loading.module.scss";

export function Loading({ children }: { children: ReactNode }) {
  return <div className={styles.loading}>{children}</div>;
}
