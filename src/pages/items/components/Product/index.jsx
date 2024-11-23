import clsx from "clsx";
import List from "@components/List";
import ProductItem from "../ProductItem";
import styles from "./styles.module.scss";

export default function ProductList({
  items,
  keyword,
  isLoading,
  error,
  rspnCol = { pc: 5, table: 3, mobile: 2 },
}) {
  const col = Object.entries(rspnCol).map(
    ([key, value]) => styles[`${key}-col-${value}`]
  );

  return (
    <List
      items={items}
      isLoading={isLoading}
      error={error}
      message={{
        errorMessage: "상품을 가져오는데 문제가 생겼습니다.",
        emptyMessage: `${keyword && `'${keyword}'로 검색된`} 상품이 없습니다.`,
      }}
      className={clsx(styles.items, col)}
      itemClassName={styles.item}
      renderItem={(item) => <ProductItem item={item} keyword={keyword} />}
    />
  );
}
