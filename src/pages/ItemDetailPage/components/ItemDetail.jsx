import Tag from "./Tag.jsx";
import "./ItemDetail.css";
import userImg from "../../../assets/images/user-info-img.png";
import itemHeart from "../../../assets/images/ic_heart_itemDetail.png";

function ItemDetail({ product }) {
  return (
    <div className="productContainer">
      <img className="productImg" src={product.images[0]} />
      <div className="productDesc">
        <div className="productHeader">
          <h3 className="productName">{product.name}</h3>
          <h2 className="productPrice">{product.price}원</h2>
        </div>
        <div className="productInfo">
          <p>상품소개</p>
          <p className="productDescription">{product.description}</p>
          <p>상품태그</p>
          <Tag />
        </div>
        <div className="productOwnerContainer">
          <div className="productOwnerInfo">
            <img className="userImg" src={userImg} />
            <div>
              <div className="userName">{product.ownerNickname}</div>
              <div className="date">
                {new Date(product.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
          <div className="favoriteCountContainer">
            <img className="heartImg" src={itemHeart} />
            <div className="favoriteCount">{product.favoriteCount}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
