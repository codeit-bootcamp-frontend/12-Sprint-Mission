import React from "react";
import heartIcon from "../../assets/img/logo/heartIcon.svg";
import styles from "./allProduct.module.css";
import EMPTY_IMAGE_URL from "../../assets/img/landing/Img_home_02.png";
import { Link } from "react-router-dom";

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
            <Link to={`/items/${product.id}`} className={styles.product_link}>
              <div className={styles.product_image_box}>
                {/* 상품 이미지 */}
                <img
                  className={styles.product_image}
                  src={
                    product.images && product.images.length > 0
                      ? product.images[0]
                      : EMPTY_IMAGE_URL
                  }
                  alt={product.name || "기본 이미지"}
                />
              </div>
              {/* 상품 이름 */}
              <h3 className={styles.product_name}>{product.name}</h3>
              {/* 상품 가격 */}
              <p className={styles.product_price}>{product.price}원</p>
              <div className={styles.heart_line}>
                {/* 좋아요 아이콘 */}
                <img
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
