"use client";

import { addComment, removeComment, updateComment } from "@service/comments";
import { BoardName, Comment } from "@type/comment";
import { CommentFormType } from "@schemas/comment";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { useQueryClient } from "@tanstack/react-query";

export default function useComment(name: BoardName, comment?: Comment) {
  const { data: session } = useSession();
  const { id } = useParams();
  const productId = Number(id);
  const isOwner = comment && Number(session?.user?.id) === comment.writer.id;
  const queryClient = useQueryClient();

  async function handleSubmit(data: CommentFormType) {
    if (!session?.user) {
      return alert("로그인이 필요합니다.");
    }

    try {
      await addComment(name, productId, data);
      queryClient.invalidateQueries({
        queryKey: ["comments", name, Number(id)],
      });
      alert("성공적으로 작성했습니다.");
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
      queryClient.invalidateQueries({
        queryKey: ["comments", name, Number(id)],
      });
      alert("성공적으로 수정했습니다.");
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
        queryClient.invalidateQueries({
          queryKey: ["comments", name, Number(id)],
        });
      } catch (err) {
        console.log(err);
      }
    }
  }

  return { isOwner, handleSubmit, handleUpdate, handleDelete };
}
