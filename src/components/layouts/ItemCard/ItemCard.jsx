import defaultImg from '../../../assets/images/img_default.png';
import heartEmptyImg from '../../../assets/images/heart_empty.svg';
import styles from './ItemCard.module.css';

const ItemCard = ({ value, category }) => {
  const { name, price, images, favoriteCount } = value;
  const imgSrc = images[0] ? images[0] : defaultImg;
  return (
    <div className={styles[`${category}-card`]}>
      <img
        src={imgSrc}
        alt="상품 이미지"
        className={styles[`${category}-img`]}
      />
      <p className={styles['card-name']}>{name}</p>
      <p className={styles['card-price']}>{price}</p>
      <div className={styles['card-favorite']}>
        <img
          src={heartEmptyImg}
          alt="배경없는 하트 이미지"
          className={styles['heart-empty-img']}
        />
        <span className={styles['card-favorite-cnt']}>{favoriteCount}</span>
      </div>
    </div>
  );
};

export default ItemCard;
