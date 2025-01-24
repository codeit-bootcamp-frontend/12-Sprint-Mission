import Image from "next/image";
import styles from "../../styles/boards/postList.module.css";
import noImg from "@/public/assets/images/app/common/no_img.jpg";
import BestBadgeImg from "@/public/assets/images/boards/ic_medal.svg";
import WishHeartImg from "@/public/assets/images/boards/ic_heart.svg";
import { useState } from "react";
import { Item } from "./types";

function BestPost({ item }: { item: Item }) {
  const [isImgError, setIsImgError] = useState(false);

  return (
    <>
      <div className={styles.bestBadge}>
        <BestBadgeImg />
        Best
      </div>
      <div className={styles.contentsCover}>
        <p className={styles.title}>{item.title}</p>
        <div className={styles.thumbnailImg}>
          {item?.image === null || isImgError ? (
            <Image
              src={noImg}
              alt="게시글 이미지"
              priority
              onError={() => setIsImgError(true)}
            />
          ) : (
            <Image
              src={item.image}
              alt="게시글 이미지"
              priority
              fill
              onError={() => setIsImgError(true)}
            />
          )}
        </div>
      </div>
      <div className={styles.infoCover}>
        <div className={styles.leftLine}>
          <p className={styles.nickName}>{item.writer.nickname}</p>
          <div className={styles.wishCover}>
            <WishHeartImg width={16} height={16} />
            <p className={styles.num}>{item.likeCount}+</p>
          </div>
        </div>
        <div className={styles.rightLine}>
          <p className={styles.date}>{item.createdAt.slice(0, 10)}</p>
        </div>
      </div>
    </>
  );
}

export default BestPost;
