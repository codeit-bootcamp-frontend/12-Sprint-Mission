import { useState } from "react";
import styles from "../../styles/productList/productList.module.css";
import BestListFilter from "./BestListFilter";
import BestItem from "./BestItem";
import { Link } from "react-router-dom";
import { Props } from "./types";

function BestItemsList() {
  const [productList, setProductList] = useState<Props[]>([]);
  return (
    <>
    {/* @ts-expect-error Async Server Component */}
      <BestListFilter
        setProductList={setProductList}
      />
      <div className={`${styles.productContents} ${styles.bestProduct}`}>
        <p className={styles.listTitle}>베스트 상품</p>
        <ul className={styles.productCover}>
          {productList.map((item) => {
            return (
              <li key={item.id} className={styles.item}>
                <Link to={`/items/${item.id}`}>
                  <BestItem item={item} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export { BestItemsList };
