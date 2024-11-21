import clsx from "clsx";
import ProductItem from "./ProductItem";
import ProductItemEmpty from "./ProductItemEmpty";
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
    return <ProductItemEmpty keyword={keyword} />;
  }

  return (
    <ul className={styles.items}>
      {items.map((item) => (
        <li key={item.id} className={clsx(styles.item, col)}>
          <ProductItem item={item} keyword={keyword} />
        </li>
      ))}
    </ul>
  );
}
