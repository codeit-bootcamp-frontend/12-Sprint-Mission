"use client";

import { FieldItem, Form, Textarea } from "@components/Field";
import { Author, Button } from "@components/ui";
import styles from "./CommentForm.module.scss";
import { Comment } from "@type/comment";
import useFormWithError from "@hooks/useFormWithError";
import { CommentFormSchema, CommentFormType } from "@schemas/comment";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldAdapter } from "@components/adaptor/rhf";
import { useAuth } from "@/context/AuthContext";

interface CommentForm {
  initialData?: Comment;
  onCommentSubmit: (data: CommentFormType) => Promise<void>;
  onClose?: () => void;
  isEdit?: boolean;
}

export function CommentForm({
  initialData,
  onCommentSubmit,
  onClose,
  isEdit,
}: CommentForm) {
  const {
    control,
    formError,
    reset,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useFormWithError<CommentFormType>({
    mode: "onChange",
    resolver: zodResolver(CommentFormSchema),
    defaultValues: initialData,
  });
  const { user } = useAuth();

  function handleClose() {
    reset();
    if (onClose) {
      onClose();
    }
  }

  const message = isEdit
    ? "성공적으로 수정했습니다."
    : "성공적으로 작성했습니다.";

  async function onSubmit(data: CommentFormType) {
    if (!user) {
      return alert("로그인이 필요합니다.");
    }

    try {
      await onCommentSubmit(data);
      alert(message);
      window.location.reload();
    } catch (err) {
      throw err;
    }
  }

  return (
    <Form
      isLoading={isSubmitting}
      error={formError}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FieldItem>
        {!isEdit && (
          <FieldItem.Label htmlFor="content">문의하기</FieldItem.Label>
        )}
        <FieldAdapter
          name="content"
          control={control}
          render={(props) => (
            <Textarea
              size="sm"
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              {...props}
            />
          )}
        />
      </FieldItem>
      <div className={styles.footer}>
        {isEdit ? (
          <div className={styles.meta}>
            {initialData && (
              <Author
                avatar={initialData.writer.image}
                nickname={initialData.writer.nickname}
                updatedAt={initialData.updatedAt}
              />
            )}
            <div className={styles.controls}>
              <Button
                variant="text"
                color="secondary"
                size="sm"
                onClick={handleClose}
              >
                취소
              </Button>
              <Button type="submit" size="sm" disabled={!isValid}>
                수정 완료
              </Button>
            </div>
          </div>
        ) : (
          <Button type="submit" size="sm" disabled={!isValid}>
            등록
          </Button>
        )}
      </div>
    </Form>
  );
}
