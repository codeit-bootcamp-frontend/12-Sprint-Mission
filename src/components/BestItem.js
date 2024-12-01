import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { getProducts } from "../API";

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) return 1;
  if (width < 1280) return 2;
  return 4;
};

function BestItem() {
  const [itemList, setItemList] = useState([]); // 상품 목록 데이터 저장
  const [pageSize, setPageSize] = useState(getPageSize()); // 현재 화면 크기에 맞는 페이지 크기

  // 데이터 가져오기
  const fetchSortedData = async ({ orderBy, pageSize }) => {
    const products = await getProducts({ orderBy, pageSize });
    setItemList(products.list);
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

    window.addEventListener("resize", handleResize);
    fetchSortedData({ orderBy: "favorite", pageSize });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pageSize]);

  return (
    <div className="bestItemsContainer">
      <h1 className="sectionTitle">베스트 상품</h1>

      <div className="bestItemsCardSection">
        {itemList?.map((item) => (
          <ItemCard item={item} key={`best-item-${item.id}`} />
        ))}
      </div>
    </div>
  );
}

export default BestItem;
