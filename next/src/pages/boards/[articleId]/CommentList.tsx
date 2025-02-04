import styles from "./CommentList.module.css";
import Comment from "./Comment";
import Image from "next/image";
import { Comment as CommentType } from "@/types";

type CommentListProps = {
  commentList: CommentType[];
};

export default function CommentList({ commentList }: CommentListProps) {
  return (
    <div className={styles.container}>
      {commentList.length === 0 ? (
        <Image
          src="/images/comments_null.svg"
          alt="댓글 없음"
          width={151}
          height={208}
        />
      ) : (
        commentList.map((item) => <Comment key={item.id} comment={item} />)
      )}
    </div>
  );
}
