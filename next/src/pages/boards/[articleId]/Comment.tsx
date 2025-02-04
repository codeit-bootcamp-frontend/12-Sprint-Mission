import styles from "./Comment.module.css";
import { Comment as CommentType } from "@/types";
import Image from "next/image";

interface CommentProps {
  comment: CommentType;
}

export default function Comment({ comment }: CommentProps) {
  return (
    <div className={styles.container}>
      <div className={styles.contentSection}>
        <p className={styles.content}>{comment.content}</p>
        <Image
          src="/images/ic_kebab.svg"
          alt="더보기 아이콘"
          width={24}
          height={24}
        />
      </div>
      <div className={styles.userSection}>
        {comment.writer.image ? (
          <Image
            src={comment.writer.image}
            alt="작성자 프로필이미지"
            width={32}
            height={32}
          />
        ) : (
          <Image
            src="/images/profile.svg"
            alt="기본 프로필이미지"
            width={32}
            height={32}
          />
        )}
        <div className={styles.userInfo}>
          <p className={styles.nickname}>{comment.writer.nickname}</p>
          <p className={styles.date}>{comment.createdAt}</p>
        </div>
      </div>
    </div>
  );
}
