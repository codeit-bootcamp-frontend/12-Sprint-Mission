import useForm from "@hooks/useForm";
import { FieldItem, Form, Textarea } from "@components/Field";
import { Section } from "@components/Section";
import { Button } from "@components/ui";
import { commentSchema } from "./schema";
import { addProductComment } from "@service/comments";
import { useParams } from "react-router-dom";

export default function Comment() {
  const { id } = useParams();
  const { formError, isFormValid, isLoading, handleSubmit, register } =
    useForm(commentSchema);

  async function onSubmit(data) {
    try {
      await addProductComment(id, data);
      alert("문의를 작성했습니다.");
      window.location.reload();
    } catch (err) {
      throw err;
    }
  }

  return (
    <Form
      isLoading={isLoading}
      error={formError}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Section>
        <Section.Content>
          <FieldItem>
            <FieldItem.Label htmlFor="content">문의하기</FieldItem.Label>
            <Textarea
              size="sm"
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              {...register("content")}
            />
          </FieldItem>
        </Section.Content>
        <Section.Footer>
          <Button type="submit" size="sm" disabled={!isFormValid}>
            등록
          </Button>
        </Section.Footer>
      </Section>
    </Form>
  );
}
