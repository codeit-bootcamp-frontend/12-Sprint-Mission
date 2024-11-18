import ProductItem from "./ProductItem";
import styles from "./styles.module.scss";

export default function ProductList({ mode = "", items }) {
  return (
    <ul className={`${styles.items} ${styles[mode]}`}>
      {items.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
