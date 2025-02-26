import { ReactNode } from "react";
import clsx from "clsx";
import { ListMode, Product } from "@/types/product";
import styles from "./ProductListWrapper.module.scss";

interface ProductListWrapper {
  mode: ListMode;
  items: Product[];
  children: (item: Product) => ReactNode;
}

export default function ProductListWrapper({
  mode,
  items,
  children,
}: ProductListWrapper) {
  return (
    <ul className={clsx(styles.items, styles[mode])}>
      {items.map((item) => (
        <li key={item.id} className={styles.item}>
          {children(item)}
        </li>
      ))}
    </ul>
  );
}
