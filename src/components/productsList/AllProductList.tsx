import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GetProductsAPI } from "../../api/GetProductsAPI";
import "./AllProductList.css";
import favoriteIcon from "../../assets/favorite_icon.png";
import noImg from "../../assets/no_img.jpg";

type Product = {
  id: number;
  name: string;
  price: number;
  favoriteCount: number;
  images: string[];
};

function AllProductList() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [orderBy, setOrderBy] = useState<string>();
  const [keyword, setKeyword] = useState<string>();
  const imageSize = "220px";

  const loadAllProducts = async () => {
    try {
      const data = await GetProductsAPI({
        page: 1,
        pageSize: 10,
        orderBy: orderBy,
        keyword: keyword,
      });
      // console.log(data);
      setAllProducts(data);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error("전체 상품 로드 실패:", error);
      } else {
        throw error;
      }
    }
  };

  useEffect(() => {
    loadAllProducts();
  }, [orderBy, keyword]);

  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrderBy(e.target.value);
  };

  const searchProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <section className="allProdcutContainer">
      <div className="allProducts-nav">
        <h3 className="title">전체 상품</h3>
        <div className="allProducts-nav-right">
          <input
            className="search"
            placeholder="검색할 상품을 입력해주세요."
            value={keyword}
            onChange={searchProducts}
          ></input>
          <Link to="/addproduct">
            <button className="registerButton">상품 등록하기</button>
          </Link>
          <select
            className="sortButton"
            value={orderBy}
            onChange={handleOrderChange}
          >
            <option className="sortOption" value="recent">
              최신순
            </option>
            <option className="sortOption" value="favorite">
              좋아요순
            </option>
          </select>
        </div>
      </div>
      <div className="allProducts">
        {allProducts.map((product) => (
          <div className="allProduct" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img
                className="productImage"
                src={product.images?.[0] || noImg}
                alt="전체 상품 이미지"
                style={{
                  width: imageSize,
                  height: imageSize,
                }}
              />
            </Link>
            <div className="content">
              <p className="name">{product.name}</p>
              <p className="price">
                {new Intl.NumberFormat("ko-KR").format(product.price)}원
              </p>

              <div className="favorite">
                <img src={favoriteIcon} alt="좋아요 버튼" />
                <p className="favoriteCount">
                  {product.favoriteCount.toString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AllProductList;
