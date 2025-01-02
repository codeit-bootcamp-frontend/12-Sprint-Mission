import styles from "./BestItemSection.module.css";
import { useEffect } from "react";
import { useState } from "react";
import { getProductList } from "../../../api/ItemApi";
import "../MarketPage";
import ItemCard from "../../../components/ItemCard/ItemCard.jsx";

const getPageSize = () => {
  const width = window.innerWidth;

  if (width < 768) {
    return 1;
  } else if (width < 1280) {
    return 2;
  } else {
    return 4;
  }
};

function BestItemSection() {
  const [itemList, setItemList] = useState([]);
  const [pageSize, setPageSize] = useState(getPageSize());

  const loadProductList = async ({ orderBy, pageSize }) => {
    const products = await getProductList({ orderBy, pageSize });
    setItemList(products.list);
  };

  useEffect(() => {
    const handleReSize = () => {
      setPageSize(getPageSize());
    };

    window.addEventListener("resize", handleReSize);

    loadProductList({ orderBy: "favorite", pageSize });
  }, [pageSize]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>베스트 상품</h1>
      <div className={styles.list}>
        {itemList?.map((item) => (
          <ItemCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default BestItemSection;
