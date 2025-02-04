import Image from "next/image";
import styles from "./BasePost.module.css";
import formatDate from "../../../utils/date";
import { Post } from "../../../types";
import Link from "next/link";

type BasePostProps = {
  post: Post;
};

export default function BasePost({ post }: BasePostProps) {
  const { id, content, image, writer, createdAt, likeCount } = post;
  //post.writer.nickname 구조분해
  const { nickname } = writer;

  return (
    <Link className={styles.link} href={`boards/${id}`}>
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
            <p>{nickname}</p>
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
    </Link>
  );
}
