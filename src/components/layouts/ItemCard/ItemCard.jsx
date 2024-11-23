import defaultImg from '../../../assets/images/img_default.png';
import heartEmptyImg from '../../../assets/images/heart_empty.svg';

const ItemCard = ({ value }) => {
  const { name, price, images, favoriteCount, category } = value;
  const imgSrc = images[0] ? images[0] : defaultImg;
  return (
    <div className={`${category}-card`}>
      <img src={imgSrc} alt="상품 이미지" className={`${category}-img`} />
      <p className="card-name">{name}</p>
      <p className="card-price">{price}</p>
      <div className="card-favorite">
        <img
          src={heartEmptyImg}
          alt="배경없는 하트 이미지"
          className="heart-empty-img"
        />
        <span className="card-favorite-cnt">{favoriteCount}</span>
      </div>
    </div>
  );
};

export default ItemCard;
