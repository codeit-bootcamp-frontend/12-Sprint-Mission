"use client";

import { FieldItem, Form, Textarea } from "@components/Field";
import { Author, Button } from "@components/ui";
import styles from "./CommentForm.module.scss";
import { BoardName, Comment } from "@/service/comment.type";
import useFormWithError from "@hooks/useFormWithError";
import { CommentFormSchema, CommentFormType } from "@/service/comment.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldAdapter } from "@components/adaptor/rhf";
import { COMMENT_PLACEHOLDER, COMMENT_TITLE } from "@/constants/message";
import { isAxiosError } from "axios";

interface CommentForm {
  name: BoardName;
  initialData?: Comment;
  onCommentSubmit: (data: CommentFormType) => Promise<Comment>;
  onClose?: () => void;
  isEdit?: boolean;
}

export function CommentForm({
  name,
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
    defaultValues: initialData || {
      content: "",
    },
  });

  function handleClose() {
    reset();
    onClose?.();
  }

  async function onSubmit(data: CommentFormType) {
    try {
      await onCommentSubmit(data);
      reset({
        content: "",
      });
      onClose?.();
    } catch (error) {
      throw new Error(
        isAxiosError(error)
          ? error.response?.data.message
          : "알 수 없는 에러가 발생했습니다."
      );
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
          <FieldItem.Label htmlFor="content">
            {COMMENT_TITLE[name]}
          </FieldItem.Label>
        )}
        <FieldAdapter
          name="content"
          control={control}
          render={(props) => (
            <Textarea
              size="sm"
              placeholder={COMMENT_PLACEHOLDER[name]}
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
