import { FieldItem, Form, Textarea } from "@components/Field";
import { Author, Button } from "@components/ui";
import styles from "./CommentForm.module.scss";
import { BoardName, Comment } from "@type/comment";
import useFormWithError from "@hooks/useFormWithError";
import { CommentFormSchema, CommentFormType } from "@schemas/comment";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldAdapter } from "@components/adaptor/rhf";
import { useSession } from "next-auth/react";
import { COMMENT_PLACEHOLDER, COMMENT_TITLE } from "@/constants/message";

interface CommentForm {
  name: BoardName;
  initialData?: Comment;
  onCommentSubmit: (data: CommentFormType) => Promise<void>;
  onClose?: () => void;
  isEdit?: boolean;
  onRefresh: () => void;
}

export function CommentForm({
  name,
  initialData,
  onCommentSubmit,
  onClose,
  isEdit,
  onRefresh,
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
  const { data: session } = useSession();

  function handleClose() {
    reset();
    onClose?.();
  }

  const message = isEdit
    ? "성공적으로 수정했습니다."
    : "성공적으로 작성했습니다.";

  async function onSubmit(data: CommentFormType) {
    if (!session?.user) {
      return alert("로그인이 필요합니다.");
    }

    try {
      await onCommentSubmit(data);
      alert(message);
      onRefresh();
      reset({ content: "" });
      onClose?.();
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
