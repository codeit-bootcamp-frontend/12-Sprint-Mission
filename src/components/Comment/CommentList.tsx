import { Alert, Message } from "@components/ui";
import { Comment } from "./Comment";
import styles from "./CommentList.module.scss";
import { useComments } from "@/context/CommentContext";
import { COMMENT_EMPTY, COMMENT_LOADING } from "@/constants/message";

export function CommentList() {
  const { name, comments, handleLoad, isLoading, error } = useComments();
  const { list, nextCursor } = comments;

  return (
    <div className={styles.comments}>
      {list.length === 0 ? (
        <Message
          icon={COMMENT_EMPTY[name].image}
          alt={COMMENT_EMPTY[name].message}
        >
          {COMMENT_EMPTY[name].message}
        </Message>
      ) : (
        <ul className={styles.list}>
          {list?.map((comment) => (
            <Comment key={comment.id} name={name} comment={comment} />
          ))}
        </ul>
      )}
      {error && <Alert>{error.message}</Alert>}

      {nextCursor && (
        <div className={styles.control}>
          {isLoading ? (
            <Message compact>{COMMENT_LOADING[name]}</Message>
          ) : (
            <button
              type="button"
              className={styles.button}
              onClick={handleLoad}
            >
              더보기
            </button>
          )}
        </div>
      )}
    </div>
  );
}
