import { ReactComponent as HeartIcon } from "../../../assets/images/icons/ic_heart.svg";

function ItemCard({ items }) {
  return (
    <li className="item-wrapper">
      <div className="img-box">
        <img src={items.images[0]} alt={items.name} />
      </div>
      <div className="info-box">
        <strong>
          <span>{items.name}</span>
          <em>{items.price.toLocaleString()}원</em>
        </strong>
      </div>
      <div className="like-box">
        <HeartIcon />
        <b>{items.favoriteCount}</b>
      </div>
    </li>
  );
}

export default ItemCard;
