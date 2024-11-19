import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import defaultImg from "../../assets/img/icon/icon_placeholder.svg";
import iconHeart from "../../assets/img/icon/icon_heart.svg";
import styles from "./styles.module.scss";

function formatToWon(price) {
  return Number(price).toLocaleString() + "원";
}

function HighLightWithKeyword({ content, keyword }) {
  if (!keyword) return <>{content}</>;

  const textArray = content.split(new RegExp(`(${keyword})`, "gi"));
  return (
    <>
      {textArray.map((text, index) => {
        return text.toLowerCase() === keyword.toLowerCase() ? (
          <em key={index}>{text}</em>
        ) : (
          <Fragment key={index}>{text}</Fragment>
        );
      })}
    </>
  );
}

export default function ProductItem({ item, keyword }) {
  const { id, images, name, price, favoriteCount } = item;
  const [error, setError] = useState(false);

  function handleImgError(e) {
    setError(true);
  }

  let imgSrc = defaultImg;
  if (images.length) {
    imgSrc = error ? defaultImg : images[0];
  }

  let imgCss = styles.default;
  if (images.length) {
    imgCss = error ? styles.default : "";
  }

  return (
    <li className={styles.item}>
      <Link to={`/items/${id}`}>
        <figure className={styles.cover}>
          <img
            src={imgSrc}
            alt={name}
            onError={handleImgError}
            className={imgCss}
          />
        </figure>
        <div className={styles.content}>
          <div className={styles.title}>
            <HighLightWithKeyword content={name} keyword={keyword} />
          </div>
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
