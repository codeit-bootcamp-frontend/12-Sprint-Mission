import { ReactNode } from "react";
import clsx from "clsx";
import { Article, ListMode } from "@/types/article";
import styles from "./BoardListWrapper.module.scss";

interface BoardListWrapper {
  mode: ListMode;
  items: Article[];
  children: (item: Article) => ReactNode;
}

export default function BoardListWrapper({
  mode,
  items,
  children,
}: BoardListWrapper) {
  return (
    <ul className={clsx(styles.list, styles[mode])}>
      {items.map((item) => (
        <li key={item.id} className={styles.item}>
          {children(item)}
        </li>
      ))}
    </ul>
  );
}
