import noPhotoImg from "../asset/nophoto.png";
import HeartIcon from "../asset/ic_heart.png";
import "./AllProductItem.css";

function AllProductItem({ item }) {
  return (
    <div>
      {item.images[0] ? (
        <img
          className="allproduct-img"
          src={item.images[0]}
          alt="상품 이미지"
        />
      ) : (
        <img className="allproduct-img" src={noPhotoImg} alt="상품 이미지" />
      )}
      <h2>{item.name}</h2>
      <p>{item.price}</p>
      <div>
        <img
          className="allproduct-popularity"
          src={HeartIcon}
          alt="찜 아이콘"
        />
        <span>{item.favoriteCount}</span>
      </div>
    </div>
  );
}

export default AllProductItem;
