import { ReactComponent as HeartIcon } from "../../../assets/images/icons/ic_heart.svg";

function ItemCard({ items }) {
  return (
    <li className="item-wrapper">
      <div className="img-box">
        {items.images[0] && <img src={items.images[0]} alt={items.name} />}
      </div>
      <div className="info-box">
        <strong>
          <span className="item-name">{items.name}</span>
          <em className="item-price">{items.price.toLocaleString()}원</em>
        </strong>
      </div>
      {/* 
        TODO : 좋아요 기능 구현
      */}
      <div className="like-box">
        <HeartIcon />
        {items.favoriteCount}
      </div>
    </li>
  );
}

export default ItemCard;
