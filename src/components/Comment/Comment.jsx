import { useState } from "react";
import { useAuth } from "@context/AuthContext";
import useComment from "./useComment";
import { Author } from "@components/ui";
import { More } from "@components/Button";
import { CommentForm } from ".";
import styles from "./Comment.module.scss";

export function Comment({ name, comment }) {
  const {
    auth: { user },
  } = useAuth();
  const [isModify, setIsModify] = useState(false);
  const {
    content,
    updatedAt,
    writer: { nickname, image, id: writerId },
  } = comment;
  const { handleUpdate, handleDelete } = useComment(name, comment);

  function handleModify() {
    if (user?.id !== writerId) {
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
        <More
          options={[
            { label: "수정하기", action: handleModify },
            { label: "삭제하기", action: handleDelete },
          ]}
        />
      </div>
    </li>
  );
}
