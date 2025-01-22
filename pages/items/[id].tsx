import { GetServerSideProps } from "next";
import Link from "next/link";
import Image from "next/image";
import defaultImage from "../assets/icon/ic_default.png";
import heartIcon from "../assets/icon/ic_heart.png";
import Profile from "../assets/icon/ic_profile.png";
import Kebab from "../assets/icon/ic_kebab.png";
import Back from "../assets/icon/ic_back.png";
import DetailInquiry from "../components/DetailInquiry";
import DetailComments from "../components/DetailComments";
import styles from "../../styles/itemDetail.module.css";

type Item = {
  id: string;
  name: string;
  price: number;
  description: string;
  tags: string[];
  images: string[];
  favoriteCount: number;
  ownerNickname: string;
  createdAt: string;
};

type ItemDetailProps = {
  item: Item | null;
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}.${month}.${day}`;
};

const ItemDetail = ({ item }: ItemDetailProps) => {
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
  } = item;

  const imageUrl = images.length > 0 ? images[0] : defaultImage;
  const formattedDate = formatDate(createdAt);

  return (
    <div className={styles.mainSection}>
      <div className={styles.mainContainer}>
        <div className={styles.detailSection}>
          <div>
            <Image
              className={styles.mainImg}
              src={imageUrl}
              alt={name}
              width={500}
              height={500}
              objectFit="cover"
            />
          </div>
          <div className={styles.detailContainer}>
            <div className={styles.itemTitle}>
              <div className={styles.itemTitleText}>
                <p className={styles.itemName}>{name}</p>
                <p className={styles.itemPrice}>{price.toLocaleString()}원</p>
              </div>
              <Image
                className={styles.kebabImg}
                src={Kebab}
                alt="더보기 버튼"
                width={24}
                height={24}
              />
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
                <Image
                  className={styles.ownerProfileIcon}
                  src={Profile}
                  alt="프로필 아이콘"
                  width={40}
                  height={40}
                />
                <div className={styles.ownerInfoBox}>
                  <p className={styles.ownerNickname}>{ownerNickname}</p>
                  <p className={styles.createDate}>{formattedDate}</p>
                </div>
              </div>
              <div className={styles.favoriteCount}>
                <Image
                  className={styles.heartIcon}
                  src={heartIcon}
                  alt="하트 아이콘"
                  width={24}
                  height={24}
                />
                <p className={styles.favoriteCountText}>{favoriteCount}</p>
              </div>
            </div>
          </div>
        </div>
        <DetailInquiry />
        <DetailComments />
        <div className={styles.backBtnContainer}>
          <Link href="/">
            <p className={styles.backBtnText}>목록으로 돌아가기</p>
            <Image src={Back} alt="뒤로가기 아이콘" width={24} height={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

// Server-Side Rendering (SSR)로 데이터 가져오기
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };

  try {
    const res = await fetch(
      `https://panda-market-api.vercel.app/products/${id}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch item details");
    }
    const item: Item = await res.json();

    return { props: { item } };
  } catch (error) {
    console.error("Error fetching item details:", error);
    return { props: { item: null } };
  }
};
