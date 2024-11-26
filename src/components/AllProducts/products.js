import React from "react";
import heartIcon from "../../assets/img/logo/heartIcon.svg";
import styles from "./styles.module.css";
import EMPTY_IMAGE_URL from "../../assets/img/landing/Img_home_02.png";

function ProductList({ products }) {
  return (
    <ul className={styles["all-list"]}>
      {/* 상품 목록이 있을 경우, 상품 정보를 렌더링 */}
      {products.length > 0 ? (
        products.map((product) => (
          <li key={product.id} className={styles["best-card"]}>
            <div className={styles["product-image-box"]}>
              {/* 상품 이미지 */}
              <img
                className={styles["product-image"]}
                src={
                  product.images && product.images.length > 0
                    ? product.images[0]
                    : EMPTY_IMAGE_URL
                }
                alt={product.name || "기본 이미지"}
                width="221"
                height="221"
              />
            </div>
            {/* 상품 이름 */}
            <h3 className={styles["product-name"]}>{product.name}</h3>
            {/* 상품 가격 */}
            <p className={styles["product-price"]}>{product.price}원</p>
            <div className={styles["heart-line"]}>
              {/* 좋아요 아이콘 */}
              <img
                className={styles["heart-image"]}
                src={heartIcon}
                alt="좋아요 하트 기호"
              />
              {/* 좋아요 개수 */}
              <span className={styles["heart-num"]}>
                {product.favoriteCount}
              </span>
            </div>
          </li>
        ))
      ) : (
        <p>No Products</p> /* 상품이 없으면 'No Products' 메시지 출력 */
      )}
    </ul>
  );
}

export default ProductList;
