import React from "react";
import heartIcon from "@/public/assets/img/logo/heartIcon.svg";
import styles from "./allProduct.module.css";
import EMPTY_IMAGE_URL from "@/public/assets/img/landing/Img_home_02.png";
import Link from "next/link";
import Image from "next/image"; // next/image 사용

// Product 타입 정의
interface Product {
  id: string; // 상품 ID
  name: string; // 상품 이름
  price: number; // 상품 가격
  favoriteCount: number; // 좋아요 개수
  images: string[]; // 상품 이미지 URL 배열
}

// props 타입 정의
interface ProductListProps {
  products: Product[]; // products 배열
}

function ProductList({ products }: ProductListProps) {
  return (
    <ul className={styles.all_list}>
      {/* 상품 목록이 있을 경우, 상품 정보를 렌더링 */}
      {products.length > 0 ? (
        products.map((product) => (
          <li key={product.id} className={styles.item_card}>
            <Link href={`/items/${product.id}`} className={styles.product_link}>
              <div className={styles.product_image_box}>
                {/* 상품 이미지 */}
                <Image
                  className={styles.product_image}
                  src={
                    product.images && product.images.length > 0
                      ? product.images[0]
                      : EMPTY_IMAGE_URL
                  }
                  width={500}
                  height={500}
                  alt={product.name || "기본 이미지"}
                  unoptimized // 최적화 비활성화
                />
              </div>
              {/* 상품 이름 */}
              <h3 className={styles.product_name}>{product.name}</h3>
              {/* 상품 가격 */}
              <p className={styles.product_price}>{product.price}원</p>
              <div className={styles.heart_line}>
                {/* 좋아요 아이콘 */}
                <Image
                  className={styles.heart_image}
                  src={heartIcon}
                  alt="좋아요 하트 기호"
                />
                {/* 좋아요 개수 */}
                <span className={styles.heart_num}>
                  {product.favoriteCount}
                </span>
              </div>
            </Link>
          </li>
        ))
      ) : (
        <p>No Products</p> /* 상품이 없으면 'No Products' 메시지 출력 */
      )}
    </ul>
  );
}

export default ProductList;
