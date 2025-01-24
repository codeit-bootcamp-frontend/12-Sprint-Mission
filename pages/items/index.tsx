import { useState } from "react";
import { BestItemsList } from "../../components/items/BestItemsList";
import styles from "../../styles/items/productList.module.css";
import ItemListNav from "../../components/app/ItemListNav";
import PaginationComponents from "../../components/app/Pagination";
import AllItemsList from "../../components/items/AllItemsList";
import Head from "next/head";
import Footer from "@/components/app/Footer";

function ProductListPage() {
  const [page, setPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(1);
  const [isDataCount, setIsDataCount] = useState<number>(0);

  return (
    <>
      <Head>
        <title>중고마켓 - 판다마켓</title>
      </Head>
      <ItemListNav />
      <div className={styles.pagiContainer}>
        <BestItemsList />
        <AllItemsList
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

export default ProductListPage;
