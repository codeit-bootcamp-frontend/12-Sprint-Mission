import { useState } from "react";
import styles from "../../styles/productList/productList.module.css";
import { BestItemsList } from "../../Components/ProductList/BestItemsList";
import ItemsListNav from "../../Components/App/ItemsListNav";
import PaginationComponents from "../../Components/App/Pagination";
import GeneralItemsList from "../../Components/ProductList/GeneralItemsList";

function ProductList() {
  const [page, setPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(1);
  const [isDataCount, setIsDataCount] = useState<number>(0);

  return (
    <>
      <ItemsListNav />
      <div className={styles.pagiContainer}>
        <BestItemsList />
        <GeneralItemsList
          page={page}
          setPage={setPage}
          setPageCount={setPageCount}
          setIsDataCount={setIsDataCount}
        />
        <PaginationComponents
          page={page}
          setPage={setPage}
          pageCount={pageCount}
          isDataCount={isDataCount}
        />
      </div>
    </>
  );
}

export default ProductList;
