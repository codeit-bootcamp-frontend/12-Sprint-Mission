import { ReactNode } from "react";
import { Article, ListMode } from "@/types/article";
import styles from "./BoardListWrapper.module.scss";
import clsx from "clsx";

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
