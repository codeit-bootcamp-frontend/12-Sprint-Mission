import HeartIcon from "../asset/ic_heart.png";
import "./BestProductItem.css";

function ProductItem({ item }) {
  return (
    <div>
      <img className="bestproduct-img" src={item.images[0]} alt="상품 이미지" />
      <h2 className="bestproduct-title">{item.name}</h2>
      <p>{item.price}</p>
      <div>
        <img
          className="bestproduct-popularity"
          src={HeartIcon}
          alt="찜 아이콘"
        />
        <span>{item.favoriteCount}</span>
      </div>
    </div>
  );
}

export default ProductItem;
