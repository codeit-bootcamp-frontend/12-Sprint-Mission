import { addComment, removeComment, updateComment } from "@service/comments";
import { BoardName, Comment } from "@type/comment";
import { CommentFormType } from "@schemas/comment";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";

export default function useComment(name: BoardName, comment?: Comment) {
  const { data: session } = useSession();
  const { id } = useParams();
  const productId = Number(id);
  const isOwner = comment && Number(session?.user?.id) === comment.writer.id;

  async function handleSubmit(data: CommentFormType) {
    try {
      await addComment(name, productId, data);
    } catch (err) {
      throw err;
    }
  }

  async function handleUpdate(data: CommentFormType) {
    if (!comment) return;

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
    if (!comment) return;

    if (!isOwner) {
      return alert("작성자만 삭제가 가능합니다.");
    }

    if (confirm("정말 삭제할까요?")) {
      try {
        await removeComment(comment.id);
        alert("문의를 삭제했습니다.");
      } catch (err) {
        console.log(err);
      }
    }
  }

  return { isOwner, handleSubmit, handleUpdate, handleDelete };
}
