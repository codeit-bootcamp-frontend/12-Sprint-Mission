import { Link } from "react-router-dom";
import defaultImg from "../../assets/img/icon/icon_placeholder.svg";
import iconHeart from "../../assets/img/icon/icon_heart.svg";
import styles from "./styles.module.scss";

function formatToWon(price) {
  return Number(price).toLocaleString() + "원";
}

export default function ProductItem({ item }) {
  const { images, name, price, favoriteCount } = item;
  return (
    <li className={styles.item}>
      <Link to="/items/10">
        <figure className={styles.cover}>
          <img src={images[0] ?? defaultImg} alt={name} />
        </figure>
        <div className={styles.content}>
          <div className={styles.title}>{name}</div>
          <div className={styles.price}>{formatToWon(price)}</div>
          <div className={styles.action}>
            <img className={styles.icon} src={iconHeart} alt="좋아요" />
            <span className={styles.count}>{favoriteCount}</span>
          </div>
        </div>
      </Link>
    </li>
  );
}
