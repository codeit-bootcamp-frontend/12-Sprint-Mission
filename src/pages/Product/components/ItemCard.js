function ItemCard({ items }) {
  return (
    <li className="item-wrapper">
      <div className="img-box">
        <img />
      </div>
      <div className="info-box">
        <strong>
          <span>{items.name}</span>
          <br />
          <em>{items.favoriteCount}원</em>
        </strong>
      </div>
      <div className="like-box">
        <img src="" />
        <b>{items.createdAt}</b>
      </div>
    </li>
  );
}

export default ItemCard;
