import "./product.css";
import heartImage from "../../assets/images/heart.png";
import useDevice from "../../hooks/useDevice";

function ProductItem({ imageUrl, name, price, likeCount, size }) {
  return (
    <div className="product-item">
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: "#f3f2f2",
        }}
      >
        <img
          className="product-image"
          src={imageUrl}
          alt="베스트아이템이미지"
          style={{
            width: `${size}px`,
            height: `${size}px`,
          }}
        />
      </div>
      <div className="product-info">
        <p>{name}</p>
        <p>{price.toLocaleString()}원</p>
        <div className="heart-section">
          <img src={heartImage} alt="하트이미지" />
          <span>{likeCount.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
