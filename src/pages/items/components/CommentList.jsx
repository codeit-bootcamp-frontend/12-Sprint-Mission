import { useState } from "react";
import { getProductComments } from "@service/comments";
import Comment from "./Comment";
import styles from "./CommentList.module.scss";
import { useAuth } from "@context/AuthContext";
import { useParams } from "react-router-dom";

export default function CommentList({ comments: initialComment }) {
  const {
    auth: { user },
  } = useAuth();
  const { id } = useParams();
  const [comments, setComments] = useState(initialComment);
  const { list, nextCursor } = comments;

  async function handleLoad() {
    try {
      const { list, nextCursor: newCursor } = await getProductComments({
        id,
        cursor: nextCursor,
      });

      setComments((prev) => ({
        ...prev,
        nextCursor: newCursor,
        list: [...prev.list, ...list],
      }));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.comments}>
      <div className={styles.list}>
        {list?.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            isOwner={user?.id === comment.writer.id}
          />
        ))}
      </div>
      {nextCursor && (
        <div className={styles.control}>
          <button type="button" className={styles.button} onClick={handleLoad}>
            더보기
          </button>
        </div>
      )}
    </div>
  );
}
