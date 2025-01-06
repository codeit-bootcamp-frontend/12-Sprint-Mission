import HeartIcon from "../../asset/ic_heart.png";
import styles from "./BestProductItem.module.css";

function ProductItem({ item }) {
  return (
    <div>
      <img
        className={styles.bestproduct_img}
        src={item.images[0]}
        alt="상품 이미지"
      />
      <h2 className={styles.bestproduct_title}>{item.name}</h2>
      <p>{item.price.toLocaleString()}</p>
      <div>
        <img
          className={styles.bestproduct_popularity}
          src={HeartIcon}
          alt="찜 아이콘"
        />
        <span>{item.favoriteCount}</span>
      </div>
    </div>
  );
}

export default ProductItem;
