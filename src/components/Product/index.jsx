import clsx from "clsx";
import ProductItem from "./ProductItem";
import Error from "./Error";
import LoadingSpinner from "@components/LoadingSpinner";
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

  if (error) {
    return <Error>문제가 생겨 정보를 가져오지 못했습니다.</Error>;
  }

  if (!items.length && !isLoading) {
    return (
      <Error keyword={keyword}>
        {keyword && `'${keyword}'로 검색된`} 상품이 없습니다.
      </Error>
    );
  }

  return (
    <>
      {isLoading && <LoadingSpinner position="absolute" light />}
      <ul className={clsx(styles.items, col)}>
        {items.map((item) => (
          <li key={item.id} className={styles.item}>
            <ProductItem item={item} keyword={keyword} />
          </li>
        ))}
      </ul>
    </>
  );
}
