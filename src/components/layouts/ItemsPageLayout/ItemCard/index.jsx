import { useState, useEffect } from 'react';
import defaultImg from '../../../../assets/images/img_default.png';
import heartEmptyImg from '../../../../assets/images/heart_empty.svg';
import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';

const ItemCard = ({ value, category }) => {
  const { name, price, images, favoriteCount, id } = value;

  const [imgSrc, setImgSrc] = useState(images[0] || defaultImg);
  const navigate = useNavigate();

  useEffect(() => {
    if (images[0]) {
      setImgSrc(images[0]);
    } else {
      setImgSrc(defaultImg);
    }
  }, [images]);

  const handleImageError = () => {
    setImgSrc(defaultImg);
  };

  const cardClickHandler = () => {
    navigate(id.toString());
  };

  return (
    <div className={styles[`${category}-card`]}>
      <img
        src={imgSrc}
        alt="상품 이미지"
        className={styles[`${category}-img`]}
        onError={handleImageError}
        onClick={cardClickHandler}
      />
      <p className={styles['card-name']}>{name}</p>
      <p className={styles['card-price']}>{`${price.toLocaleString()}원`}</p>
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
