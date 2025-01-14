import { useState } from "react";
import styles from "../../styles/productList/productList.module.css";
import notFoundImg from "../../assets/images/productList/not_found.png";
import GeneralSearchForm from "./GeneralSearchForm";
import GeneralItem from "./GeneralItem";
import { Link } from "react-router-dom";
import { ItemsList, Props } from "./types";

function EmptyPlaceholder() {
  return (
    <div className={styles.emptyList}>
      <img src={notFoundImg} alt="Not Found" />
      <p>검색하신 상품을 찾을 수 없습니다</p>
    </div>
  );
}

function GeneralItemsList({
  page,
  setPage,
  setPageCount,
  setIsDataCount,
}: ItemsList) {
  const [productContainer, setProductContainer] = useState<Props[]>([]);
  return (
    <div className={`${styles.productContents} ${styles.generalProduct}`}>
      <GeneralSearchForm
        setProductContainer={setProductContainer}
        page={page}
        setPage={setPage}
        setPageCount={setPageCount}
        setIsDataCount={setIsDataCount}
      />
      <ul className={styles.productCover}>
        {productContainer.length === 0 && <EmptyPlaceholder />}
        {productContainer.length > 0 &&
          productContainer.map((item) => {
            return (
              <li key={item.id} className={styles.item}>
                <Link to={`/items/${item.id}`}>
                  <GeneralItem item={item} />
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default GeneralItemsList;
