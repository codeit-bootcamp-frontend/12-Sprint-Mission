import { ReactNode } from "react";
import styles from "./ProductFilter.module.scss";

interface ProductFilterProps {
  search: ReactNode;
  action: ReactNode;
  filter: ReactNode;
}

export default function ProductFilter({
  search,
  action,
  filter,
}: ProductFilterProps) {
  return (
    <>
      <div className={styles.search}>{search}</div>
      <div className={styles.button}>{action}</div>
      <div className={styles.select}>{filter}</div>
    </>
  );
}
