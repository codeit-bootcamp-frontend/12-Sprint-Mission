import AllProductItem from "./AllProductItem";
import styles from "./AllProductList.module.css";
import { getProduct } from "../../api";
import { useEffect, useState } from "react";
import NavBar from "../Navigation/NavBar";
import PageButton from "../Pagination/PageButton";

interface ProductValue {
  page?: number;
  pageSize: number;
  orderBy: string;
  keyword?: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  tags: string[];
  images: string[];
  createdAt: string;
  ownerNickname: string;
  favoriteCount: number;
}

function AllProductList() {
  const [items, setItems] = useState<Product[]>([]);
  const [orderBy, setOrderBy] = useState("recent");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [keyword, setKeyword] = useState("");
  const [maxPage, setMaxPage] = useState(5);

  const handleLoad = async (value: ProductValue) => {
    const result = await getProduct(value);
    const { list, totalCount } = result;
    setItems(list);
    const currentMaxPage = Math.ceil(totalCount / 10);
    setMaxPage(currentMaxPage);
  };

  useEffect(() => {
    handleLoad({ page, pageSize, orderBy, keyword });
  }, [page, pageSize, orderBy, keyword]);

  const handleOrder = (value: string) => {
    setOrderBy(value);
    setPage(1);
  };

  const handlePage = (value: number) => {
    setPage(value);
  };

  const handleKeyword = (value: string) => {
    setKeyword(value);
    setPage(1);
  };

  return (
    <div className={styles.allsection}>
      <div className={styles.allsection_container}>
        <NavBar handleOrder={handleOrder} handleKeyword={handleKeyword} />
        <div className={styles.allproduct_list}>
          {items.map((item) => {
            return <AllProductItem key={item.id} item={item} />;
          })}
        </div>
      </div>
      <PageButton handlePage={handlePage} page={page} maxPage={maxPage} />
    </div>
  );
}

export default AllProductList;
