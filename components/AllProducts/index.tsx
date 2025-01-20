import React, { useState, useEffect } from "react";
import { getProducts } from "@/api/api";
import NavBar from "./navBar";
import ProductList from "./products";
import Pagination from "./pagination";
import styles from "./allProduct.module.css";
import windowView from "@/hooks/windowView"; // 커스텀 훅 임포트

// Product 타입 정의
interface Product {
  id: string; // 상품 ID
  name: string; // 상품 이름
  price: number; // 상품 가격
  favoriteCount: number; // 좋아요 개수
  images: string[]; // 상품 이미지 URL 배열
}

// API에서 반환되는 데이터 타입 정의
interface ProductResponse {
  list: Product[];
  totalCount: number;
}

// 페이지 크기 설정을 위한 상수
const PAGE_SIZES = {
  small: { max: 767, size: 4 },
  medium: { max: 1199, size: 6 },
  large: { size: 10 }, // max가 없으므로 이 조건은 기본값으로 작동
};

// 페이지 크기 계산 함수
function getPageSize(width: number): number {
  if (width <= PAGE_SIZES.small.max) {
    return PAGE_SIZES.small.size;
  } else if (width <= PAGE_SIZES.medium.max) {
    return PAGE_SIZES.medium.size;
  } else {
    return PAGE_SIZES.large.size;
  }
}

const AllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]); // 상품 데이터 상태
  const [pageSize, setPageSize] = useState<number>(4); // 초기 페이지 크기 설정 (10개로 설정)
  const [currentPage, setCurrentPage] = useState<number>(1); // 현재 페이지 상태
  const [orderBy, setOrderBy] = useState<"recent" | "favorite">("recent"); // 정렬 기준
  const [totalItems, setTotalItems] = useState<number>(0); // 전체 상품 개수 상태
  const [keyword, setKeyword] = useState<string>(""); // 검색어 상태
  const [isLoading, setIsLoading] = useState<boolean>(false); // 로딩 상태

  const windowWidth = windowView(); // 화면 크기 추적

  // 화면 크기 변경에 따라 페이지 크기 조정
  useEffect(() => {
    if (windowWidth === 0) return; // windowWidth가 0이면 return

    const newPageSize = getPageSize(windowWidth); // 화면 크기 기반 페이지 크기 계산
    setPageSize(newPageSize); // 페이지 크기 업데이트
  }, [windowWidth]); // windowWidth가 변경될 때마다 실행

  // 상품 데이터 가져오는 함수
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true); // 로딩 시작
      try {
        const result: ProductResponse = await getProducts({
          page: currentPage, // 현재 페이지
          pageSize, // 페이지 크기
          orderBy, // 정렬 기준
          keyword, // 검색어
        });
        setProducts(result.list); // 상품 목록 설정
        setTotalItems(result.totalCount); // 전체 상품 개수 설정
      } catch (error) {
        if (error instanceof Error) {
          console.error("데이터 로드 중 오류 발생:", error.message);
          setProducts([]); // 오류 발생 시 빈 배열로 설정
        }
      } finally {
        setIsLoading(false); // 로딩 완료
      }
    };

    fetchProducts();
  }, [currentPage, pageSize, orderBy, keyword]); // 의존성 배열

  return (
    <div className={styles.all_Container}>
      <NavBar
        orderBy={orderBy}
        setOrderBy={setOrderBy}
        keyword={keyword}
        setKeyword={setKeyword}
      />
      <ProductList products={products} />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Pagination
          currentPage={currentPage}
          totalItems={totalItems}
          itemsPerPage={pageSize}
          onPageChange={setCurrentPage} // 페이지 변경 시 상태 업데이트
        />
      )}
    </div>
  );
};

export default AllProducts;
