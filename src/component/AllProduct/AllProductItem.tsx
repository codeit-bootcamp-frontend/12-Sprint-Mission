import noPhotoImg from "../../asset/nophoto.png";
import HeartIcon from "../../asset/ic_heart.png";
import styles from "./AllProductItem.module.css";
import { Link } from "react-router-dom";
import { SyntheticEvent } from "react";

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

function AllProductItem({ item }: { item: Product }) {
  const onErrorImg = (e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = noPhotoImg;
  };
  //이미지 링크가 잘못된 링크일 때, 기본 이미지 출력

  return (
    <Link to={`/items/${item.id}`} className={styles.link}>
      <div>
        {item.images[0] ? (
          <img
            className={styles.allproduct_img}
            src={item.images[0]}
            alt="상품 이미지"
            onError={onErrorImg}
          />
        ) : (
          <img
            className={styles.allproduct_img}
            src={noPhotoImg}
            alt="상품 이미지"
          />
        )}
        <h2 className={styles.allproduct_title}>{item.name}</h2>
        <p>{item.price.toLocaleString()}</p>
        <div>
          <img
            className={styles.allproduct_popularity}
            src={HeartIcon}
            alt="찜 아이콘"
          />
          <span>{item.favoriteCount}</span>
        </div>
      </div>
    </Link>
  );
}

export default AllProductItem;
