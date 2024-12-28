import { CommentForm } from ".";
import useComment from "./useComment";
import styles from "./CommentAdd.module.scss";

export function CommentAdd({ name }) {
  const { handleSubmit } = useComment(name);
  return (
    <div className={styles.form}>
      <CommentForm onCommentSubmit={handleSubmit} />
    </div>
  );
}
