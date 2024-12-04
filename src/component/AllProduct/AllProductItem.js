import noPhotoImg from "../../asset/nophoto.png";
import HeartIcon from "../../asset/ic_heart.png";
import "./AllProductItem.css";

function AllProductItem({ item }) {
  const onErrorImg = (e) => {
    e.target.src = noPhotoImg;
  };
  //이미지 링크가 잘못된 링크일 때, 기본 이미지 출력
  return (
    <div>
      {item.images[0] ? (
        <img
          className="allproduct-img"
          src={item.images[0]}
          alt="상품 이미지"
          onError={onErrorImg}
        />
      ) : (
        <img className="allproduct-img" src={noPhotoImg} alt="상품 이미지" />
      )}
      <h2 className="allproduct-title">{item.name}</h2>
      <p>{item.price.toLocaleString()}</p>
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
