import { PropsWithChildren } from "react";
import styles from "./UserWrapper.module.scss";

export default function UserWrapper({ children }: PropsWithChildren) {
  return <div className={styles.container}>{children}</div>;
}
