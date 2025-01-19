import Image from "next/image";
import styles from "./BasePost.module.css";
import formatDate from "@/src/utils/date";

interface BasePostProps {
  id: number;
  content: string;
  image: string;
  likeCount: number;
  createdAt: string;
  writer: {
    id: number;
    nickname: string;
  };
}

export default function BasePost({
  content,
  image,
  writer,
  likeCount,
  createdAt,
}: BasePostProps) {
  return (
    <div className={styles.container}>
      <div className={styles.product}>
        <h3>{content}</h3>
        {image ? (
          <Image src={image} alt="상품이미지" width={72} height={72} />
        ) : (
          <Image
            src={"/images/null.svg"}
            alt="비어있는상품이미지"
            width={72}
            height={72}
          />
        )}
      </div>
      <div className={styles.info}>
        <div className={styles.userInfo}>
          <Image
            src={"/images/profile.svg"}
            alt="유저프로필이미지"
            width={24}
            height={24}
          />
          <p>{writer.nickname}</p>
          <p>{formatDate(createdAt)}</p>
        </div>
        <div className={styles.like}>
          <Image
            src={"/images/ic_heart.svg"}
            alt="하트이미지"
            width={24}
            height={24}
          />
          <p>{likeCount}</p>
        </div>
      </div>
    </div>
  );
}
