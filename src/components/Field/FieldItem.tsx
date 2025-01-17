import { PropsWithChildren, ReactNode } from "react";
import styles from "./FieldItem.module.scss";

export function FieldItem({ children }: { children: ReactNode }) {
  return <div className={styles["form-item"]}>{children}</div>;
}

interface LabelProps extends PropsWithChildren {
  htmlFor?: string;
}

export function Label({ htmlFor, children }: LabelProps) {
  return (
    <label className={styles["item-label"]} htmlFor={htmlFor}>
      {children}
    </label>
  );
}

FieldItem.Label = Label;
