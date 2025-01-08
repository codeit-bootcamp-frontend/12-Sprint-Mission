import { ReactNode } from "react";
import styles from "./PageWrapper.module.scss";

export function PageWrapper({ children }: { children: ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}
