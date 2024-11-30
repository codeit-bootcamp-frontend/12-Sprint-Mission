import heartImg from '../../../images/ic_heart.png';

function ItemCard({ item }) {
  return (
    <div className="itemCard">
      <img src={item.images[0]} alt="상품 이미지" className="itemImg" />
      <div className="itemContent">
        <div className="itemDescription">{item.description}</div>
        <div className="itemPrice">{item.price}</div>
        <div className="itemFavorite">
          <img src={heartImg} alt="좋아요 버튼" className="heartImg" />
          <span className="itemFavoriteCount">{item.favoriteCount}</span>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
