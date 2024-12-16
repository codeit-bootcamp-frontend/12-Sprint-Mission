import heartIcon from "../../../assets/images/ic_heart.png";
import "./ItemCard.css";

function ItemCard({ item }) {
  return (
    <div className="itemCard">
      <img className="itemCardImg" src={item.images?.[0]} alt={item.name} />
      <div className="itemContainer">
        <p className="itemName">{item.name}</p>
        <p className="itemPrice">{item.price}</p>
        <div className="iconContainer">
          <img className="heartIcon" src={heartIcon} alt="하트아이콘" />
          <p className="favoriteCount">{item.favoriteCount}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
