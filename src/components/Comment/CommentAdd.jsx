import { CommentForm } from ".";
import useComment from "./useComment";

export function CommentAdd({ name }) {
  const { handleSubmit } = useComment(name);
  return <CommentForm onCommentSubmit={handleSubmit} />;
}
