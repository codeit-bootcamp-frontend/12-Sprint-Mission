import { PropsWithChildren } from "react";
import styles from "./FormControl.module.scss";

export default function FormControl({ children }: PropsWithChildren) {
  return <div className={styles.control}>{children}</div>;
}
