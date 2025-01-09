"use client";

import { useState } from "react";
import { useAuth } from "@context/AuthContext";
import useComment from "./useComment";
import { Author } from "@components/ui";
import { More } from "@components/Button";
import { CommentForm } from ".";
import styles from "./Comment.module.scss";
import { BoardName, Comment as CommentItem } from "@type/comment";
import { useComments } from "@/context/CommentContext";

interface Comment {
  name: BoardName;
  comment: CommentItem;
}

export function Comment({ name, comment }: Comment) {
  const { user } = useAuth();

  const [isModify, setIsModify] = useState(false);
  const {
    content,
    updatedAt,
    writer: { nickname, image, id: writerId },
  } = comment;
  const { refreshComments } = useComments();
  const {
    isOwner,
    handleUpdate,
    handleDelete: handleDeleteComment,
  } = useComment(name, comment);

  function handleModify() {
    if (user?.id !== writerId) {
      return alert("작성자만 수정이 가능합니다.");
    }
    setIsModify(true);
  }

  function handleClose() {
    setIsModify(false);
  }

  async function handleDelete() {
    await handleDeleteComment();
    refreshComments();
  }

  if (isModify) {
    return (
      <li className={styles.item}>
        <div className={styles.form}>
          <CommentForm
            initialData={comment}
            onCommentSubmit={handleUpdate}
            onClose={handleClose}
            isEdit
            onRefresh={refreshComments}
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
