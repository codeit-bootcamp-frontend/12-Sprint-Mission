import clsx from "clsx";
import ProductItem from "./ProductItem";
import ProductItemEmpty from "./ProductItemEmpty";
import styles from "./styles.module.scss";

export default function ProductList({ mode = "", items, keyword, isLoading }) {
  if (!items.length && !isLoading) {
    return <ProductItemEmpty keyword={keyword} />;
  }
  return (
    <ul className={clsx(styles.items, styles[mode])}>
      {items.map((item) => (
        <ProductItem key={item.id} item={item} keyword={keyword} />
      ))}
    </ul>
  );
}
