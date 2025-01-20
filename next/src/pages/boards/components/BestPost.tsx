import Image from "next/image";
import styles from "./BestPost.module.css";
import formatDate from "@/src/utils/date";
import { PostData } from "@/src/types";

export default function BestPost({
  content,
  image,
  writer = { nickname: "익명 사용자" },
  likeCount,
  createdAt,
}: PostData) {
  return (
    <div className={styles.container}>
      <div className={styles.tag}>
        <Image
          src={"/images/ic_medal.svg"}
          alt="메달이미지"
          width={16}
          height={16}
        />
        <p>Best</p>
      </div>
      <div className={styles.content}>
        <p>{content}</p>
        <Image width={72} height={72} src={image!} alt={`${image} 이미지`} />
      </div>
      <div className={styles.info}>
        <div className={styles.userInfo}>
          <p>{writer!.nickname}</p>
          <div className={styles.likeCount}>
            <Image
              src={"/images/ic_heart.svg"}
              alt="하트이미지"
              width={16}
              height={16}
            />
            <p>{likeCount}</p>
          </div>
        </div>
        <p>{formatDate(createdAt)}</p>
      </div>
    </div>
  );
}
