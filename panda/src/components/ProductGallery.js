import React, { useState, useEffect } from "react";
import { fetchProducts } from "./api"; // API 유틸 불러오기
import "./ProductGallery.css";
import Pagination from "./pagination"; // Pagination 컴포넌트 불러오기
import { Link } from "react-router-dom"; // Link 추가
import heart from "../icon/ic_heart.png";
import useWindowSize from "./useWindowSize"; // 커스텀 훅 가져오기

function ProductGallery() {
  const [allProducts, setAllProducts] = useState([]); // 전체 상품 데이터 상태
  const [bestProducts, setBestProducts] = useState([]); // 상위 4개 베스트 상품 상태
  const [displayProducts, setDisplayProducts] = useState([]); // 페이지네이션으로 표시할 상품들 상태
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // searchQuery 상태 정의
  const [sortOption, setSortOption] = useState("recent"); // sortOption 상태 정의
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태 추가
  const [totalCount, setTotalCount] = useState(0); // 총 상품 개수 상태 추가
  const [totalPages, setTotalPages] = useState(1); // 총 페이지 수 상태 추가
  const [pageSize] = useState(10); // 한 페이지에 표시할 상품 개수
  const { width } = useWindowSize(); // 화면 크기 가져오기

   // 화면 크기에 따라 상품 표시 개수 조정
  const getVisibleBestProductsCount = () => {
    if (width <= 768) return 1; // 모바일에서는 1개
    if (width <= 1024) return 2; // 테블릿에서는 2개
    return 4; // 데스크탑에서는 4개
  };

  const getVisibleAllProductsCount = () => {
    if (width <= 768) return 4; // 모바일에서는 4개
    if (width <= 1024) return 6; // 테블릿에서는 6개
    return 10; // 데스크탑에서는 10개
  };
  

 useEffect(() => {
  const fetchData = async () => {
    try {
      // 전체 상품 데이터를 가져옴
      const { products, totalCount } = await fetchProducts(
        1,
        180, // 페이지네이션을 적용하지 않도록 처음에는 180개를 가져옴
        sortOption,
        searchQuery
      );
      setAllProducts(products); // 전체 상품 데이터를 상태에 저장
      setTotalCount(totalCount);
      setTotalPages(Math.ceil(totalCount / pageSize)); // 총 페이지 수 계산

      // 전체 상품 데이터를 기반으로 베스트 상품을 추출 (favoriteCount가 높은 순으로)
      const sortedBest = [...products].sort(
        (a, b) => b.favoriteCount - a.favoriteCount
      );
      const topBest = sortedBest.slice(0, getVisibleBestProductsCount()); // 화면 크기에 맞게 상위 상품 개수 결정
      setBestProducts(topBest); // 베스트 상품 상태 업데이트

      // 상위 상품을 제외한 나머지 상품을 displayProducts에 저장
      const remainingProducts = products.slice(getVisibleBestProductsCount());
      const visibleProducts = remainingProducts.slice(0, getVisibleAllProductsCount()); // 화면 크기에 맞게 표시할 상품 수 결정
      setDisplayProducts(visibleProducts); // 표시할 상품들 설정
    } catch (error) {
      setError("상품 데이터를 불러오는 데 문제가 발생했습니다.");
    }
  };

  fetchData();
}, [sortOption, searchQuery, width]); // 화면 크기 변경 시 데이터 갱신

  // 좋아요 증가 함수
  const handleLike = (productId) => {
    setDisplayProducts((prevProducts) =>
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
    setCurrentPage(1); // 검색 시 첫 페이지로 이동
  };

  // 정렬 처리
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    setCurrentPage(1); // 정렬 변경 시 첫 페이지로 이동
  };

  // 페이지 변경 함수
  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return; // 유효한 페이지 번호만 이동
    setCurrentPage(pageNumber);
  
    // 표시할 상품 수 계산 (화면 크기에 따라 동적 변경)
    const itemsPerPage = getVisibleAllProductsCount();
  
    // 페이지네이션 적용
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  
    // 전체 상품에서 해당 페이지에 맞는 상품 설정
    setDisplayProducts(allProducts.slice(startIndex, endIndex));
  };

  return (
    <div className="productGallery">
      <div className="productGalleryWrapper">
        <div className="productGalleryBest">
          <span className="productGalleryBestText">베스트 상품</span>
          <div className="productGalleryBestMain">
            {/* 베스트 상품 표시 */}
            {bestProducts.length === 0 ? (
              <p>베스트 상품이 없습니다.</p>
            ) : (
              bestProducts.map((product, index) => (
                <div className="productGalleryBestMainBox" key={index}>
                  <div className="productGalleryBestImg">
                    <img
                      src={
                        product.images && product.images[0]
                          ? product.images[0]
                          : "/default-image.jpg"
                      }
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

        <div className="productGalleryAll">
          <div className="productGalleryAllMenu">
            <span className="AllMenuTitle">전체 상품</span>

            <div className="productSearch">
                <input
                  type="text"
                  placeholder="검색할 상품을 입력해주세요"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="searchInput"
                />
            </div>
            <Link to="/additem">
            <button className="AllMenuOptionBtn">상품 등록하기</button>
            </Link>
            <div className="sortOptions">
                <select value={sortOption} onChange={handleSortChange}>
                  <option value="recent">최신순</option>
                  <option value="favorite">좋아요순</option>
                </select>
            </div>
          </div>

          <div className="productGalleryAllMain">
            {displayProducts.length === 0 ? (
              <p>상품이 없습니다.</p>
            ) : (
              displayProducts.map((product, index) => (
                <div className="productGalleryAllMainBoxItem" key={index}>
                  <div className="AllMainBoxItemImg">
                    <img
                      src={
                        product.images && product.images[0]
                          ? product.images[0]
                          : "/default-image.jpg"
                      }
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

          {/* 페이지네이션 */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductGallery;
