"use client";

import { CommentForm } from ".";
import useComment from "./useComment";
import styles from "./CommentAdd.module.scss";
import { useComments } from "@/context/CommentContext";

export function CommentAdd() {
  const { name, refreshComments } = useComments();
  const { handleSubmit } = useComment(name);

  return (
    <div className={styles.form}>
      <CommentForm onCommentSubmit={handleSubmit} onRefresh={refreshComments} />
    </div>
  );
}
