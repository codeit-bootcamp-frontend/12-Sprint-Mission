import Image from "next/image";
import styles from "../../styles/boards/postList.module.css";
import noImg from "@/public/assets/images/app/common/no_img.jpg";
import WishHeartImg from "@/public/assets/images/boards/ic_heart.svg";
import { useState } from "react";
import { Item } from "./types";

function AllPost({ item }:{item:Item}) {
  const [isImgError, setIsImgError] = useState(false);

  return (
    <>
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
          <div className={styles.profileImg}>
            <Image
              src="/assets/images/items/default_profile.svg"
              alt="프로필 이미지"
              fill
            />
          </div>
          <p className={styles.nickName}>{item.writer.nickname}</p>
          <p className={styles.date}>{item.createdAt.slice(0, 10)}</p>
        </div>
        <div className={styles.rightLine}>
          <WishHeartImg width={24} height={24} />
          <p className={styles.num}>{item.likeCount}+</p>
        </div>
      </div>
    </>
  );
}

export default AllPost;
