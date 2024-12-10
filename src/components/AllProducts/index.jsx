import React, { useState, useEffect } from "react";
import { getProducts } from "api";
import NavBar from "./navBar";
import ProductList from "./products";
import Pagination from "./pagination";
import styles from "./allProduct.module.css";

function AllProducts() {
  const [products, setProducts] = useState([]); // 상품 데이터 상태
  const [pageSize, setPageSize] = useState(getPageSize(window.innerWidth)); // 페이지 크기 상태 (화면 크기에 따라 동적으로 변경됨)
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const [orderBy, setOrderBy] = useState("recent"); // 정렬 기준 (최신순)
  const [totalItems, setTotalItems] = useState(0); // 전체 상품 개수 상태 (페이징에 사용)
  const [keyword, setKeyword] = useState(""); // 검색어 상태

  // 화면 크기 기반으로 페이지 크기 결정 함수
  function getPageSize(width) {
    if (width <= 767) {
      return 4; // 화면 너비가 768px 미만이면 한 페이지에 4개
    } else if (width <= 1199) {
      return 6; // 화면 너비가 768px 이상이면 한 페이지에 6개
    } else {
      return 10; // 화면 너비가 1200px 이상이면 한 페이지에 10개
    }
  }

  // 화면 크기 변경 시 페이지 크기 재조정 (반응형 디자인 처리)
  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize(window.innerWidth)); // 새로운 화면 크기 반영
    };

    window.addEventListener("resize", handleResize); // 화면 크기 변화 이벤트 리스너 추가

    return () => {
      window.removeEventListener("resize", handleResize); // 컴포넌트 언마운트 시 이벤트 리스너 제거
    };
  }, []);

  // 상품 데이터를 API에서 가져오는 함수
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await getProducts({
          page: currentPage, // 현재 페이지
          pageSize, // 페이지 크기 (한 페이지당 표시할 상품 개수)
          orderBy, // 정렬 기준 (최신순 등)
          keyword, // 검색어
          totalItems, // 총 아이템 개수 (API 요청 시 사용)
        });
        setProducts(result.list); // 상품 목록 업데이트
        setTotalItems(result.totalCount); // 전체 상품 개수 업데이트
      } catch (error) {
        console.error("데이터 로드 중 오류 발생:", error.message);
        setProducts([]); // 오류 발생 시 빈 배열로 설정
      }
    };

    fetchProducts();
  }, [currentPage, pageSize, orderBy, keyword]); // keyword가 변경될 때마다 상품 데이터 가져오기

  return (
    <div className={styles.all_Container}>
      <NavBar
        orderBy={orderBy}
        setOrderBy={setOrderBy}
        keyword={keyword}
        setKeyword={setKeyword}
      />
      <ProductList products={products} />
      <Pagination
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={pageSize}
        onPageChange={setCurrentPage} // 페이지 변경 시 상태 업데이트
      />
    </div>
  );
}

export default AllProducts;
