import clsx from "clsx";
import ProductItem from "./ProductItem";
import ProductEmpty from "./ProductEmpty";
import styles from "./styles.module.scss";

export default function ProductList({
  items,
  keyword,
  isLoading,
  rspnCol = { pc: 5, table: 3, mobile: 2 },
}) {
  const col = Object.entries(rspnCol).map(
    ([key, value]) => styles[`${key}-col-${value}`]
  );

  if (!items.length && !isLoading) {
    return <ProductEmpty keyword={keyword} />;
  }

  return (
    <ul className={clsx(styles.items, col)}>
      {items.map((item) => (
        <li key={item.id} className={styles.item}>
          <ProductItem item={item} keyword={keyword} />
        </li>
      ))}
    </ul>
  );
}
