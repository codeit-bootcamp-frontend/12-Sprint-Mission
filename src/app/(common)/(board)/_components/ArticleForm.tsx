"use client";

import { Section } from "@components/Section";
import {
  FieldItem,
  Form,
  ImageUpload,
  Input,
  Textarea,
} from "@components/Field";
import { Button } from "@components/ui";
import useFormWithError from "@hooks/useFormWithError";
import { zodResolver } from "@hookform/resolvers/zod";
import { Article } from "@/types/article";
import { FieldAdapter } from "@components/adaptor/rhf";
import { useRouter } from "next/navigation";
import { ArticleFormSchema, ArticleFormType } from "@/schemas/article";

interface ArticleAddFormProps {
  mode: "add";
  onFormSubmit: (data: ArticleFormType) => Promise<Article | undefined>;
}
interface ArticleModifyFormProps {
  initialData: Article;
  mode: "edit";
  onFormSubmit: (data: ArticleFormType) => Promise<Article | undefined>;
}

type ArticleFormProps = ArticleAddFormProps | ArticleModifyFormProps;

export default function ArticleForm(props: ArticleFormProps) {
  const { mode, onFormSubmit } = props;
  const initialData = mode === "edit" ? props.initialData : undefined;
  const router = useRouter();

  const {
    control,
    formError,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useFormWithError<ArticleFormType>({
    mode: "onBlur",
    resolver: zodResolver(ArticleFormSchema),
    defaultValues: initialData || {
      title: "",
      content: "",
    },
  });

  async function onSubmit(data: ArticleFormType) {
    try {
      const result = await onFormSubmit(data);
      const id = result?.id;

      alert(
        mode === "add" ? "성공적으로 작성했습니다." : "성공적으로 수정했습니다."
      );
      router.replace(id ? `/boards/${id}` : "boards");
    } catch (err) {
      throw err;
    }
  }

  return (
    <Section>
      <Form
        isLoading={isSubmitting}
        error={formError}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Section.Header title="게시글 쓰기">
          <Button type="submit" size="sm" disabled={!isValid}>
            {mode === "add" ? "등록" : "수정"}
          </Button>
        </Section.Header>
        <Section.Content>
          <FieldItem>
            <FieldItem.Label htmlFor="title">제목</FieldItem.Label>
            <FieldAdapter
              name="title"
              control={control}
              render={(props) => (
                <Input
                  type="text"
                  placeholder="제목을 입력해주세요"
                  {...props}
                />
              )}
            />
          </FieldItem>
          <FieldItem>
            <FieldItem.Label htmlFor="content">내용</FieldItem.Label>
            <FieldAdapter
              name="content"
              control={control}
              render={(props) => (
                <Textarea placeholder="내용을 입력해주세요" {...props} />
              )}
            />
          </FieldItem>
          <FieldItem>
            <FieldItem.Label htmlFor="image">이미지</FieldItem.Label>
            <FieldAdapter
              name="image"
              control={control}
              render={(props) => <ImageUpload {...props} />}
            />
          </FieldItem>
        </Section.Content>
      </Form>
    </Section>
  );
}
