import { useParams } from "react-router-dom";
import { addComment, removeComment, updateComment } from "@service/comments";
import { useAuth } from "@context/AuthContext";
import { BoardName, Comment, CommentFormSchema } from "@type/comment";

export default function useComment(
  name: BoardName,
  comment: Partial<Comment> = {}
) {
  const {
    auth: { user },
  } = useAuth();
  const { id } = useParams();
  const productId = Number(id);
  const isOwner = user?.id === comment.writer?.id;

  async function handleSubmit(data: CommentFormSchema) {
    try {
      await addComment(name, productId, data);
    } catch (err) {
      throw err;
    }
  }

  async function handleUpdate(data: CommentFormSchema) {
    if (!comment.id) return;
    if (!isOwner) {
      return alert("작성자만 수정이 가능합니다.");
    }

    try {
      await updateComment(comment.id, data);
    } catch (err) {
      throw err;
    }
  }

  async function handleDelete() {
    if (!comment.id) return;

    if (!isOwner) {
      return alert("작성자만 삭제가 가능합니다.");
    }

    if (confirm("정말 삭제할까요?")) {
      try {
        await removeComment(comment.id);
        alert("문의를 삭제했습니다.");
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    }
  }

  return { isOwner, handleSubmit, handleUpdate, handleDelete };
}
