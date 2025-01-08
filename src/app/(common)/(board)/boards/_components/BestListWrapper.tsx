import { ReactNode } from "react";
import { Article } from "@/types/article";
import styles from "./BestListWrapper.module.scss";

interface BestListWrapper {
  items: Article[];
  children: (item: Article) => ReactNode;
}

export default function BestListWrapper({ items, children }: BestListWrapper) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.id} className={styles.item}>
          {children(item)}
        </li>
      ))}
    </ul>
  );
}
