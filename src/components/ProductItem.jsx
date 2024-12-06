import heart_img from "../images/ic_heart.svg";
import "./ProductItem.css";

function ProductItem({ imageUrl, title, price, likeCount, size }) {
  return (
    <div>
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: "gray",
          borderRadius: "16px",
        }}
        s
      >
        <img
          className="product_Image"
          src={imageUrl}
          alt="상품이미지"
          style={{
            width: `${size}px`,
            height: `${size}px`,
          }}
        />
      </div>
      <p>{title}</p>
      <p>{price}원</p>
      <div>
        <img src={heart_img} alt="하트이모티콘" />
        <p>{likeCount}</p>
      </div>
    </div>
  );
}

export default ProductItem;
