import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductGallery.css";
import heart from "../icon/ic_heart.png";

function ProductGallery() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");  // searchQuery 상태 정의
  const [sortOption, setSortOption] = useState("latest");  // sortOption 상태 정의

  useEffect(() => {
    // API에서 limit과 offset 파라미터를 사용하여 데이터를 가져오기
    axios
      .get("https://panda-market-api.vercel.app/products", {
        params: {
          limit: 14, // 한 번에 가져올 상품 수
          offset: 0, // 처음부터 14개 상품을 가져옴
        },
      })
      .then((response) => {
        console.log(response.data); // 응답 데이터 확인
        if (response.data && Array.isArray(response.data.list)) {
          setProducts(response.data.list); // 상품 데이터를 설정
        } else {
          setError("상품 데이터를 불러오는 데 문제가 발생했습니다.");
        }
      })
      .catch((error) => {
        console.error("상품 데이터를 불러오는 데 문제가 발생했습니다:", error);
        setError("상품 데이터를 불러오는 데 문제가 발생했습니다.");
      });
  }, []);

  // 좋아요 증가 함수
  const handleLike = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, favoriteCount: product.favoriteCount + 1 }
          : product
      )
    );
  };
  
   // 상품 검색 처리
   const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // 정렬 처리
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // 검색된 상품만 필터링
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 베스트 상품에서만 favoriteCount로 내림차순 정렬
  const sortedBestProducts = products.sort(
    (a, b) => b.favoriteCount - a.favoriteCount
  );

  return (
    <div className="productGallery">
      <div className="productGalleryWrapper">
        <div className="productGalleryBest">
          <span className="productGalleryBestText">베스트 상품</span>

          <div className="productGalleryBestMain">
            {/* 베스트 상품에서만 상위 4개 상품을 표시 */}
            {sortedBestProducts.slice(0, 4).map((product, index) => (
              <div className="productGalleryBestMainBox" key={index}>
                <div className="productGalleryBestImg">
                  <img
                    src={
                      product.images && product.images[0]
                        ? product.images[0]
                        : "/default-image.jpg"
                    } // 이미지 URL 처리
                    alt={product.name}
                    className="productImage"
                  />
                </div>
                <div className="productGalleryBestData">
                  <span className="dataName">{product.description}</span>
                  <span className="dataPrice">{product.price} 원</span>
                  <div className="productGalleryFavorite">
                    <button
                      className="favoriteButton"
                      onClick={() => handleLike(product.id)}
                    >
                      <img
                        src={heart} // 하트 이미지
                        alt="좋아요"
                        className="heartIcon"
                      />
                      <span className="favoriteCount">
                        {product.favoriteCount}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="productGalleryAll">
          <div className="productGalleryAllMenu">
            <span className="AllMenuTitle">전체 상품</span>

            <div className="AllMenuOption">
                <div className="productSearch">
                  <input
                    type="text"
                    placeholder="검색할 상품을 입력해주세요"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="searchInput"
                  />
                </div>

                <button className="AllMenuOptionBtn">상품 등록하기</button>

                <div className="sortOptions">
                  <select value={sortOption} onChange={handleSortChange}>
                    <option value="latest">최신순</option>
                    <option value="likes">좋아요순</option>
                  </select>
                </div>
              </div>  
          </div>

          <div className="productGalleryAllMain">
            {products.length === 0 ? (
              <p>상품이 없습니다.</p>
            ) : (
              // 전체 상품에서 5번째부터 14번째까지 표시 (정렬 없이 그대로 표시)
              products.slice(4, 14).map((product, index) => (
                <div className="productGalleryAllMainBoxItem" key={index}>
                  <div className="AllMainBoxItemImg">
                    <img
                      src={
                        product.images && product.images[0]
                          ? product.images[0]
                          : "/default-image.jpg"
                      } // 이미지 URL 처리
                      alt={product.name}
                      className="productImage"
                    />
                  </div>
                  <div className="AllMainBoxItemData">
                    <span className="dataName">{product.description}</span>
                    <span className="dataPrice">{product.price} 원</span>
                    <div className="productGalleryFavorite">
                      <button
                        className="favoriteButton"
                        onClick={() => handleLike(product.id)}
                      >
                        <img src={heart} alt="좋아요" className="heartIcon" />
                        <span className="favoriteCount">
                          {product.favoriteCount}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductGallery;
