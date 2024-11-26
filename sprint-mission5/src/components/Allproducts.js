import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { getProducts } from "../api";
import "./allItems.css";

function AllProducts() {
  const [page, setPage] = useState("1");
  const [orderBy, setOrderBy] = useState("recent");
  const [pageSize, setPageSize] = useState("10");
  const [itemList, setItemList] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [totalPageNum, setTotalPageNum] = useState();

  const handleNewestClick = () => setOrderBy("recent");

  const handleFavoriteClick = () => setOrderBy("favorite");

  const handleLoad = async ({ orderBy, page, keyword, pageSize }) => {
    const products = await getProducts({ orderBy, page, keyword, pageSize });
    setItemList(products.list);
    setTotalPageNum(Math.ceil(products.totalCount / pageSize));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setKeyword(e.target["search"].value);
  };

  const getPageSize = () => {
    const width = window.innerWidth;
    if (width < 768) {
      return 4;
    } else if (width < 1280) {
      return 6;
    } else {
      return 10;
    }
  };

  useEffect(() => {
    handleLoad({
      orderBy,
      keyword,
      page,
    });
    setPageSize(getPageSize());
  }, [orderBy, keyword, page, pageSize]);

  return (
    <div className="allProducusContainer">
      <div className="allSectionBar">
        <h1 className="sectionTitle">전체 상품</h1>
        <div className="findItems">
          <form onSubmit={handleSearchSubmit}>
            <input name="search" />
            <button type="submit">검색</button>
          </form>
          <a>상품 등록하기</a>
          <button onClick={handleNewestClick}>최신순</button>
          <button onClick={handleFavoriteClick}>좋아요순</button>
        </div>
      </div>
      <div className="allItemsCardSection">
        {itemList?.map((item) => (
          <ItemCard item={item} key={`${item.id}`} />
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
