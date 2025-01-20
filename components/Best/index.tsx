import styles from "./best.module.css";
import heartIcon from "@/public/assets/img/logo/heartIcon.svg";
import { getProducts } from "@/api/api";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // next/image 사용
import { Product } from "@/types";
import React from "react";
import windowView from "@/hooks/windowView"; // debounce 적용된 windowView 훅 사용

const PAGE_SIZES = {
  mobile: { max: 767, size: 1 },
  tablet: { max: 1199, size: 2 },
  desktop: { size: 4 }, // 화면 크기에 따라 상품 개수를 결정
};

// 페이지 크기 계산 함수
const getPageSize = (width: number) => {
  if (width <= PAGE_SIZES.mobile.max) {
    return PAGE_SIZES.mobile.size;
  } else if (width <= PAGE_SIZES.tablet.max) {
    return PAGE_SIZES.tablet.size;
  } else {
    return PAGE_SIZES.desktop.size;
  }
};

const Best: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [pageSize, setPageSize] = useState<number>(1); // 기본값을 1로 설정 (모바일에서 1개)
  const [isError, setIsError] = useState(false);

  const windowWidth = windowView(); // debounce 적용된 windowWidth 값 받아오기

  // 화면 크기 변화에 따라 페이지 크기 설정
  useEffect(() => {
    if (windowWidth === 0) return; // windowWidth가 0이면 return

    const newPageSize = getPageSize(windowWidth); // 화면 크기에 맞는 페이지 크기 계산
    setPageSize(newPageSize); // 페이지 크기 업데이트
  }, [windowWidth]); // windowWidth가 변경될 때마다 실행

  // pageSize가 변경될 때마다 상품 데이터를 다시 불러옴
  useEffect(() => {
    const fetchBestProducts = async () => {
      try {
        const result = await getProducts({
          page: 1, // 페이지는 1로 고정
          pageSize, // 화면 크기에 맞춘 pageSize 전달
          orderBy: "favorite", // 인기 순으로 정렬
        });
        setProducts(result.list); // 상품 데이터 설정
      } catch (error) {
        if (error instanceof Error) {
          console.error("데이터 로드 중 오류 발생:", error.message);
          setIsError(true); // 오류 발생 시 상태 변경
          setProducts([]); // 오류 발생 시 빈 배열로 설정
        }
      }
    };

    fetchBestProducts(); // 페이지 크기 변경 후 상품 데이터 다시 가져오기
  }, [pageSize]); // pageSize가 변경될 때마다 데이터를 다시 가져옴

  if (isError) {
    return <div>상품을 불러오는 데 문제가 발생했습니다.</div>;
  }

  return (
    <div className={styles.best_Container}>
      <h2 className={styles.title}>베스트 상품</h2>
      <ul className={styles.best_list}>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id} className={styles.best_card}>
              <Link href={`/items/${product.id}`} passHref>
                <div className={styles.product_link}>
                  {product.images.length > 0 && (
                    <div className={styles.product_image_box}>
                      <img
                        className={styles.product_image}
                        src={product.images[0]}
                        alt={product.name}
                      />
                    </div>
                  )}

                  <h3 className={styles.product_name}>{product.name}</h3>
                  <p className={styles.product_price}>{product.price}원</p>
                  <div className={styles.heart_line}>
                    <Image
                      className={styles.heart_image}
                      src={heartIcon}
                      alt="좋아요 하트 기호"
                      width={20} // 하트 아이콘 크기 지정
                      height={20}
                    />
                    <span className={styles.heart_num}>
                      {product.favoriteCount}
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))
        ) : (
          <p>상품이 없습니다.</p> // 상품이 없을 경우
        )}
      </ul>
    </div>
  );
};

export default Best;
