import { useState } from "react";
import { BestItemsList } from "../../components/items/BestItemsList";
import styles from "../../styles/items/productList.module.css";
import ItemsListNav from "../../components/app/ItemListNav";
import PaginationComponents from "../../components/app/Pagination";
import GeneralItemsList from "../../components/items/GeneralItemsList";
import Head from "next/head";
import Footer from "@/components/app/Footer";

function ProductList() {
  const [page, setPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(1);
  const [isDataCount, setIsDataCount] = useState<number>(0);

  return (
    <>
      <Head>
        <title>중고마켓 - 판다마켓</title>
      </Head>
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
      <Footer />
    </>
  );
}

export default ProductList;
