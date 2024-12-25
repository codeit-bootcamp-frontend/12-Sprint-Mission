import heartIcon from "../../assets/images/ic_heart.png";
import "./ItemCard.css";
import EmptyItemImg from "../../assets/images/item-empty-img.svg";
import { Link } from "react-router-dom";

function ItemCard({ item }) {
  return (
    <Link to={`/item/${item.id}`} className="itemCard">
      <img
        className="itemCardImg"
        src={item.images[0] ? item.images[0] : EmptyItemImg}
        alt={item.name}
      />
      <div className="itemContainer">
        <p className="itemName">{item.name}</p>
        <p className="itemPrice">{item.price}</p>
        <div className="iconContainer">
          <img className="heartIcon" src={heartIcon} alt="하트아이콘" />
          <p className="favoriteCount">{item.favoriteCount}</p>
        </div>
      </div>
    </Link>
  );
}

export default ItemCard;
