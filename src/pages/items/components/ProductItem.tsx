import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Thumbnail } from "@components/ui";
import { toWon } from "@util/formatter";
import iconHeart from "@assets/img/icon/icon_heart.svg";
import styles from "./ProductItem.module.scss";
import { Product } from "@type/product";

function HighLightWithKeyword({
  content,
  keyword,
}: {
  content: string;
  keyword?: string;
}) {
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

export default function ProductItem({
  item,
  keyword,
}: {
  item: Product;
  keyword?: string;
}) {
  const { id, images, name, price, favoriteCount } = item;

  return (
    <Link to={`/items/${id}`} className={styles.item}>
      <div className={styles.thumbnail}>
        <Thumbnail src={images[0]} alt={name} />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <HighLightWithKeyword content={name} keyword={keyword} />
        </div>
        <div className={styles.price}>{toWon(price)}</div>
        <div className={styles.action}>
          <img className={styles.icon} src={iconHeart} alt="좋아요" />
          <span className={styles.count}>{favoriteCount}</span>
        </div>
      </div>
    </Link>
  );
}
