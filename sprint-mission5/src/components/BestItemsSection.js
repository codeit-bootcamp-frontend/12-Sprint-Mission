import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { getProducts } from "../api";
import "./bestItems.css";

function BestProductsSection() {
  const [itemList, setItemList] = useState([]);
  const [pageSize, setPageSize] = useState("4");

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

  const fetchSortedData = async ({ orderBy, pageSize }) => {
    const products = await getProducts({ orderBy, pageSize });
    setItemList(products.list);
  };

  useEffect(() => {
    fetchSortedData({ orderBy: "favorite", pageSize });
    setPageSize(getPageSize());
  }, [pageSize]);

  return (
    <div className="bestProducusContainer">
      <h1 className="sectionTitle">베스트 상품</h1>

      <div className="bestItemsCardSection">
        {itemList?.map((item) => (
          <ItemCard item={item} key={`${item.id}`} />
        ))}
      </div>
    </div>
  );
}

export default BestProductsSection;
