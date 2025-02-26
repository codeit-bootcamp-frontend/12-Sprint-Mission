"use client";

import { CommentForm } from ".";
import styles from "./CommentAdd.module.scss";
import { BoardName } from "@/service/comment.type";
import { useCommentAdd } from "@/service/comment.queries";
import { useParams } from "next/navigation";

export function CommentAdd({ name }: { name: BoardName }) {
  const { id } = useParams();
  const { mutateAsync: handleSubmit } = useCommentAdd(name, Number(id));

  return (
    <div className={styles.form}>
      <CommentForm name={name} onCommentSubmit={handleSubmit} />
    </div>
  );
}
