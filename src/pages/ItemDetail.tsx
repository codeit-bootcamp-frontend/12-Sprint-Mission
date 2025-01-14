import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import defaultImage from "../asset/none.jpeg";
import styles from "./itemDetail.module.css";
import heartIcon from "../asset/icon/ic_heart.png";
import Profile from "../asset/icon/ic_profile.png";
import Kebab from "../asset/icon/ic_kebab.png";
import Back from "../asset/icon/ic_back.png";
import DetailInquiry from "../components/DetailInquiry.tsx";
import DetailComments from "../components/DetailComments";

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}.${month}.${day}`;
};

const ItemDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [item, setItem] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await fetch(
          `https://panda-market-api.vercel.app/products/${productId}`
        );
        const data = await res.json();
        setItem(data);
      } catch (error) {
        console.error("Error fetching item details:", error);
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
    <div className={styles.mainSection}>
      <div className={styles.mainContainer}>
        <div className={styles.detailSection}>
          <div>
            <img className={styles.mainImg} src={imageUrl} alt={name} />
          </div>
          <div className={styles.detailContainer}>
            <div className={styles.itemTitle}>
              <div className={styles.itemTitleText}>
                <p className={styles.itemName}>{name}</p>
                <p className={styles.itemPrice}>
                  {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
                </p>
              </div>
              <img className={styles.kebabImg} src={Kebab} alt="더보기 버튼" />
            </div>
            <div className={styles.itemDescription}>
              <label className={styles.itemDescriptionLabel}>상품소개</label>
              <div className={styles.itemDescriptionText}>{description}</div>
            </div>

            <div className={styles.itemTags}>
              <label>상품 태그</label>
              <div>
                {tags.length > 0 ? (
                  tags.map((tag, index) => (
                    <span className={styles.itemTagBox} key={index}>
                      #{tag}
                    </span>
                  ))
                ) : (
                  <span>#태그X</span>
                )}
              </div>
            </div>
            <div className={styles.ownerInfo}>
              <div className={styles.ownerInfoProfile}>
                <img
                  className={styles.ownerProfileIcon}
                  src={Profile}
                  alt="프로필 아이콘"
                />
                <div className={styles.ownerInfoBox}>
                  <p className={styles.ownerNickname}>{ownerNickname}</p>
                  <p className={styles.createDate}>{formattedDate}</p>
                </div>
              </div>
              <div className={styles.favoriteCount}>
                <img
                  className={styles.heartIcon}
                  src={heartIcon}
                  alt="하트 아이콘"
                />
                <p className={styles.favoriteCountText}>{favoriteCount}</p>
              </div>
            </div>
          </div>
        </div>
        <DetailInquiry />
        <DetailComments />
        <div className={styles.backBtnContainer}>
          <Link to="/" className={styles.backBtn}>
            <p className={styles.backBtnText}>목록으로 돌아가기</p>
            <img src={Back} alt="뒤로가기 아이콘" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
