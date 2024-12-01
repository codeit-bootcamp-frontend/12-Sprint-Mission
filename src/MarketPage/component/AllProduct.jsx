import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./item.css";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

function AllProductList() {
  const [allProduct, setAllProduct] = useState();
  const [orderBy, setOrderBy] = useState("recent");
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState();

  useEffect(() => {
    fetch(
      `https://panda-market-api.vercel.app/products?page=${page}&pageSize=10&orderBy=${orderBy}&keyword=${keyword}`
    )
      .then((response) => response.json())
      .then((data) => setAllProduct(data));
  }, [orderBy, page, keyword]);

  return (
    <div className="all-item-container">
      <h2 className="product-container__text">전체 상품</h2>
      <div className="all-item-tools">
        <div className="input-box">
          <input
            id="input-search"
            type="text"
            placeholder="검색할 상품을 입력해주세요"
            value={keyword}
            onChange={(event) => {
              setKeyword(event.target.value);
            }}
          />
          <img
            id="input-img"
            src="/images/icons/searchIcon.png"
            alt="검색어 입력하기"
          />
        </div>
        <Link to="/additem">
          <button className="product-btn" type="button">
            상품 등록하기
          </button>
        </Link>
        <select
          className="product-select"
          onChange={(event) => setOrderBy(event.target.value)}
        >
          <option value={"recent"}>최신순</option>
          <option value={"favorite"}>좋아요순</option>
        </select>
      </div>
      <div className="all-item__list">
        {allProduct?.list.map((product) => {
          const imageUrl = product.images[0];

          return (
            <ProductCard
              key={product.id}
              imageUrl={imageUrl}
              title={product.name}
              price={product.price}
              favoriteCount={product.favoriteCount}
              imageSize={221}
            />
          );
        })}
      </div>
      <Pagination currentPage={page} setPage={setPage} />
    </div>
  );
}

export default AllProductList;
