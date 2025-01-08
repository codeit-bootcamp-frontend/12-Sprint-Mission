import { ReactNode } from "react";
import styles from "./FieldItem.module.scss";

export function FieldItem({ children }: { children: ReactNode }) {
  return <div className={styles["form-item"]}>{children}</div>;
}

function Label({
  htmlFor,
  children,
}: {
  htmlFor?: string;
  children: ReactNode;
}) {
  return (
    <label className={styles["item-label"]} htmlFor={htmlFor}>
      {children}
    </label>
  );
}

FieldItem.Label = Label;
