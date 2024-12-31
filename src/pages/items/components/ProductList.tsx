import { ReactNode } from "react";
import clsx from "clsx";
import { Product } from "@type/product";
import { LoadingSpinner, Message } from "@components/ui";
import styles from "./ProductList.module.scss";

interface ProductListProps {
  items: Product[];
  keyword?: string;
  isLoading: boolean;
  error: Error | null;
  mode?: "best" | "all";
  children: (item: Product) => ReactNode;
}

export default function ProductList({
  items,
  isLoading,
  error,
  mode = "all",
  children,
}: ProductListProps) {
  if (error) {
    return <Message>상품을 가져오는데 문제가 생겼습니다.</Message>;
  }

  if (!items.length && !isLoading) {
    return <Message>검색된 상품이 없습니다</Message>;
  }

  return (
    <>
      {isLoading && <LoadingSpinner position="absolute" light />}
      <ul className={clsx(styles.items, styles[mode])}>
        {items.map((item) => (
          <li key={item.id} className={styles.item}>
            {children(item)}
          </li>
        ))}
      </ul>
    </>
  );
}
