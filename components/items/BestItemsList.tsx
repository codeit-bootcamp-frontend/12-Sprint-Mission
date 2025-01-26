import { useState } from "react";
import Link from "next/link";
import styles from "../../styles/items/productList.module.css";
import BestItemsContainer from "./BestItemsContainer";
import BestItem from "./BestItem";
import { Props } from "./types";
import Section1Skeleton from "./Section1Skeleton";

function BestItemsList() {
  const [productList, setProductList] = useState<Props[]>([]);
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <BestItemsContainer
        setProductList={setProductList}
        setLoading={setLoading}
      />
      <div className={`${styles.productContents} ${styles.bestProduct}`}>
        <p className={styles.listTitle}>베스트 상품</p>
        {loading ? (
          <Section1Skeleton />
        ) : (
          <ul className={styles.productCover}>
            {productList.map((item) => {
              return (
                <li key={item.id} className={styles.item}>
                  <Link href={`/items/${item.id}`} prefetch={true}>
                    <BestItem item={item} />
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}

export { BestItemsList };
