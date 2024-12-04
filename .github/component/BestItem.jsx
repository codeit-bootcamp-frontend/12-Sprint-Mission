import heart from "../ImgFile/icon_wish.svg";

import "./BestItem.css";

function BestItem({ imageUrl, title, price, likeCount, size }) {
  return (
    <div>
      <div>
        <img
          className="Best-image"
          src={imageUrl}
          alt="product"
          style={{
            width: `${size}px`,
            height: `${size}px`,
          }}
        />
        <p>{title}</p>
        <p>{price}원</p>
        <div>
          <img src={heart} alt="좋아요 수" />
          {likeCount}
        </div>
      </div>
    </div>
  );
}

export default BestItem;