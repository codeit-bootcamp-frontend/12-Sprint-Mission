import { ReactNode } from "react";
import { Article } from "@/types/article";
import styles from "./BoardListWrapper.module.scss";

interface BoardListWrapper {
  items: Article[];
  children: (item: Article) => ReactNode;
}

export default function BoardListWrapper({
  items,
  children,
}: BoardListWrapper) {
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
