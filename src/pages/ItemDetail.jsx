import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import styled from "styled-components"; styled를 새롭게 배워서 사용해보려고 했는데...손에 익지 않아서 중도 포기합니다 ㅠ
import defaultImage from "../asset/none.jpeg";
import "./itemDetail.css";
import heartIcon from "../asset/icon/ic_heart.png";
import Profile from "../asset/icon/ic_profile.png";
import Kebab from "../asset/icon/ic_kebab.png";
import Back from "../asset/icon/ic_back.png";
import DetailInquiry from "../components/DetailInquiry";
import DetailComments from "../components/DetailComments";

// const ItemDetailSection = styled.div`
//   width: 1200px;
// `;

// const MainImg = styled.div`
//   margin-top: 70px;
// `;

function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}.${month}.${day}`;
}

function ItemDetail() {
  const { productId } = useParams(); // URL에서 productId 가져오기
  const [item, setItem] = useState(null); // 상품 데이터 상태
  const [loading, setLoading] = useState(true); // 로딩 상태

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await fetch(
          `https://panda-market-api.vercel.app/products/${productId}`
        );
        const data = await res.json();
        setItem(data);
      } catch (error) {
        console.error("그만...", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [productId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!item) {
    return <p>Item not found</p>;
  }

  const {
    name = "상품 정보 없음",
    price = 0,
    description = "설명이 없습니다.",
    images = [],
    tags = [],
    ownerNickname = "익명",
    favoriteCount = 0,
    createdAt = "",
  } = item || {};

  const imageUrl = images.length > 0 ? images[0] : defaultImage;

  const formattedDate = formatDate(createdAt);

  return (
    <div className="main-section">
      <div className="main-container">
        <div className="detail-section">
          <div>
            <img className="main-img" src={imageUrl} alt={name} />
          </div>
          <div className="detail-container">
            <div className="item-title">
              <div className="item-title-text">
                <p className="item-name">{name}</p>
                <p className="item-price">
                  {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
                </p>
              </div>
              <img className="kebab-img" src={Kebab} alt="더보기 버튼" />
            </div>
            <div className="item-description">
              <label className="item-description-label">상품소개</label>
              <div className="item-description-text">{description}</div>
            </div>

            <div className="item-tegs">
              <label>상품 태그</label>
              <div>
                {tags.length > 0 ? (
                  tags.map((tag, index) => (
                    <span className="item-tegs-box" key={index}>
                      #{tag}
                    </span>
                  ))
                ) : (
                  <span>#태그X</span>
                )}
              </div>
            </div>
            <div className="owner-info">
              <div className="owner-info-profile">
                <img
                  className="owner-profile-ic"
                  src={Profile}
                  alt="프로필 아이콘"
                />
                <div className="owner-info-box">
                  <p className="owner-nickname">{ownerNickname}</p>
                  <p className="create">{formattedDate}</p>
                </div>
              </div>
              <div className="favorit-count">
                <img className="heart-ic" src={heartIcon} alt="하트 아이콘" />
                <p className="favorit-count-text">{favoriteCount}</p>
              </div>
            </div>
          </div>
        </div>
        <DetailInquiry />
        <DetailComments />
        <div className="back-btn-container">
          <Link to="/" className="back-btn">
            <p className="back-btn-text">목록으로 돌아가기</p>
            <img src={Back} alt="뒤로가기 아이콘" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
