import ProductItem from "./ProductItem";
import ProductItemEmpty from "./ProductItemEmpty";
import styles from "./styles.module.scss";

export default function ProductList({ mode = "", items, keyword }) {
  if (!items.length) {
    return <ProductItemEmpty keyword={keyword} />;
  }
  return (
    <ul className={`${styles.items} ${styles[mode]}`}>
      {items.map((item) => (
        <ProductItem key={item.id} item={item} keyword={keyword} />
      ))}
    </ul>
  );
}
