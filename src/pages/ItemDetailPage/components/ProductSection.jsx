import { useState, useEffect } from "react";
import { getProduct } from "../../../api/ItemApi.js";
import styles from "./ProductSection.module.css";
import menuIcon from "../../../assets/images//menu.svg";
import Tag from "../../../components/Tag/Tag.jsx";
import Icon from "../../../components/Icon/Icon.jsx";
import userImg from "../../../assets/images/ic_profile.svg";

const ProductSection = ({ id }) => {
  const [product, setProduct] = useState(1);

  const loadProduct = async (id) => {
    try {
      const productData = await getProduct(id);
      setProduct(productData);
    } catch (error) {
      console.error("상품 데이터 로드 실패", error);
    }
  };

  useEffect(() => {
    if (id) {
      loadProduct(id);
    }
  }, [id]);

  return (
    <div className={styles.container}>
      {product.images && product.images.length > 0 ? (
        <img
          src={product.images[0]}
          alt={`${product.name} 이미지`}
          className={styles.img}
        />
      ) : (
        <p>이미지가 없습니다.</p>
      )}
      <div className={styles.content}>
        <div className={styles["content-header"]}>
          <div className={styles["header-content"]}>
            <p className={styles.description}>{product.name}</p>
            <p className={styles.price}>{product.price}</p>
          </div>
          <img src={menuIcon} alt="설정 메뉴" />
        </div>
        <div className={styles["content-mid"]}>
          <p className={styles["mid-header"]}>상품 소개</p>
          <p className={styles["mid-content"]}>{product.description}</p>
        </div>
        <div className={styles["content-bottom"]}>
          <p>상품 태그</p>
          <div className={styles["tag-box"]}>
            <Tag tags={product.tags} />
          </div>
        </div>
        <div className={styles["content-footer"]}>
          <div className={styles["user-info"]}>
            <img src={userImg} alt="프로필 이미지" />
            <div className={styles["footer-text"]}>
              <p className={styles["user-name"]}>{product.ownerNickname}</p>
              <p className={styles.date}>{product.createdAt}</p>
            </div>
          </div>
          <button className={styles["like-btn"]}>
            <Icon
              className={styles.heart}
              name="heart"
              size="32"
              color="#6b7280"
            />
            <p className={styles["like-count"]}>{product.favoriteCount}</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
