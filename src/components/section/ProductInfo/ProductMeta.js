import React from "react";
import "./ProductMeta.css";
import profile from "../../../assets/images/profile.svg";
import heart_icon from "../../../assets/icons/heart-icon.svg";

function ProductMeta({ ownerNickname, createdAt, favoriteCount }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year} ${month}.${day}`;
  };

  return (
    <div className="item-detail-meta">
      <div className="item-detail-meta-section">
        <img src={profile} alt="프로필 이미지" />
        <div className="item-detail-meta-wrapper">
          <p>{ownerNickname}</p>
          <p>{formatDate(createdAt)}</p>
        </div>
      </div>
      <div className="likebutton-wrapper">
        <button className="item-detail-likebutton">
          <img src={heart_icon} alt="좋아요 버튼" />
          <p>{favoriteCount}</p>
        </button>
      </div>
    </div>
  );
}

export default ProductMeta;
