import { useState } from "react";
import useForm from "@hooks/useForm";
import { removeComment, updateComment } from "@service/comments";
import { Author, Button, Dropdown } from "@components/ui";
import { Form, Textarea } from "@components/Field";
import { commentSchema } from "./schema";
import dotsIcon from "@assets/img/icon/icon_dots.svg";
import styles from "./Comment.module.scss";

export default function Comment({ comment, isOwner }) {
  const [isModify, setIsModify] = useState(false);
  const {
    content,
    createdAt,
    writer: { nickname, image },
  } = comment;
  const { formError, isFormValid, isLoading, handleSubmit, register } = useForm(
    commentSchema,
    {
      content,
    }
  );

  async function handleDelete() {
    try {
      await removeComment(comment.id);
      alert("문의를 삭제했습니다.");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  async function onSubmit(data) {
    try {
      await updateComment(comment.id, data);
      alert("성공적으로 수정했습니다.");
      window.location.reload();
    } catch (err) {
      throw err;
    }
  }

  if (isModify) {
    return (
      <div className={styles.comment}>
        <div className={styles.content}>
          <Form
            isLoading={isLoading}
            error={formError}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Textarea
              size="sm"
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              {...register("content")}
            />
            <div className={styles.footer}>
              <Author avatar={image} nickname={nickname} createAt={createdAt} />
              <div className={styles.controls}>
                <Button
                  color="transparent"
                  size="sm"
                  onClick={() => setIsModify(false)}
                >
                  취소
                </Button>
                <Button type="submit" size="sm" disabled={!isFormValid}>
                  수정 완료
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.comment}>
      <div className={styles.content}>
        <div className={styles.text}>{content}</div>
        <div className={styles.footer}>
          <Author avatar={image} nickname={nickname} createAt={createdAt} />
        </div>
      </div>
      {isOwner && (
        <Dropdown>
          <Dropdown.Toggle>
            <img src={dotsIcon} alt="더보기" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setIsModify(true)}>
              수정하기
            </Dropdown.Item>
            <Dropdown.Item onClick={handleDelete}>삭제하기</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}
    </div>
  );
}
