import heart from "../ImgFile/icon_wish.svg";

import "./AllList.css";

function AllList({ imageUrl, title, price, likeCount, size }) {
  return (
    <div>
      <div className="All-list">
        <img
          className="product-image"
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
          <img src={heart} alt="좋아요 수" /> {likeCount}
        </div>
      </div>
    </div>
  );
}

export default AllList;
