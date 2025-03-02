"use client";

import { useState } from "react";
import { Author } from "@components/ui";
import { More } from "@components/Button";
import { CommentForm } from ".";
import styles from "./Comment.module.scss";
import { BoardName, Comment as CommentItem } from "@/service/comment.type";
import { useCommentDelete, useCommentModify } from "@/service/comment.queries";
import { useSession } from "next-auth/react";

interface Comment {
  name: BoardName;
  comment: CommentItem;
}

export function Comment({ name, comment }: Comment) {
  const [isModify, setIsModify] = useState(false);
  const { data: session } = useSession();

  const {
    id: commentId,
    content,
    updatedAt,
    writer: { nickname, image, id: writerId },
  } = comment;
  const isOwner = writerId === Number(session?.user.id);
  const { mutateAsync: handleUpdate } = useCommentModify(name, commentId);
  const { mutate: handleDelete } = useCommentDelete(name, commentId);

  function handleModify() {
    if (!isOwner) {
      return alert("작성자만 수정이 가능합니다.");
    }
    setIsModify(true);
  }

  function handleClose() {
    setIsModify(false);
  }

  if (isModify) {
    return (
      <li className={styles.item}>
        <div className={styles.form}>
          <CommentForm
            name={name}
            initialData={comment}
            onCommentSubmit={handleUpdate}
            onClose={handleClose}
            isEdit
          />
        </div>
      </li>
    );
  }

  return (
    <li className={styles.item}>
      <div className={styles.comment}>
        <div className={styles.content}>
          <div className={styles.text}>{content}</div>
          <div className={styles.footer}>
            <Author avatar={image} nickname={nickname} updatedAt={updatedAt} />
          </div>
        </div>
        {isOwner && (
          <More
            options={[
              { label: "수정하기", action: handleModify },
              { label: "삭제하기", action: handleDelete },
            ]}
          />
        )}
      </div>
    </li>
  );
}
