import heart_img from "../../../img/ic_heart.svg";
import "./ProductItem.css";

function ProductItem({
  imageUrl,
  title,
  price,
  likeCount,
  size,
  onClick = () => {},
}) {
  return (
    <div onClick={onClick}>
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: "gray",
          borderRadius: "16px",
        }}
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
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <div
          style={{
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "24px",
            color: "#1f2937",
            marginTop: "16px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: "16px",
            fontWeight: "700",
            lineHeight: "26px",
            color: "#1f2937",
          }}
        >
          {Number(price).toLocaleString()}원
        </div>
        <div style={{ display: "flex", gap: "6px" }}>
          <img src={heart_img} alt="하트이모티콘" />
          <p>{likeCount}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
