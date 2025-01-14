import { Link } from "react-router-dom";
import HeartIcon from "../../asset/ic_heart.png";
import styles from "./BestProductItem.module.css";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  tags: string[];
  images: string[];
  createdAt: string;
  ownerNickname: string;
  favoriteCount: number;
}

function ProductItem({ item }: { item: Product }) {
  return (
    <Link to={`/items/${item.id}`} className={styles.link}>
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
    </Link>
  );
}

export default ProductItem;
