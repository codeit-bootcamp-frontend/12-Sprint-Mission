"use client";

import { CommentForm } from ".";
import useComment from "./useComment";
import styles from "./CommentAdd.module.scss";
import { BoardName } from "@type/comment";

export function CommentAdd({ name }: { name: BoardName }) {
  const { handleSubmit } = useComment(name);
  return (
    <div className={styles.form}>
      <CommentForm onCommentSubmit={handleSubmit} />
    </div>
  );
}
