import { useNavigate } from "react-router-dom";
import useForm from "@hooks/useForm";
import { addProduct, uploadProductImage } from "@service/product";
import { toWon } from "@util/formatter";
import { PageWrapper } from "@components/Page";
import { Button } from "@components/ui";
import { Section } from "@components/Section";
import {
  Form,
  FieldItem,
  Input,
  Textarea,
  TagsInput,
  ImageUpload,
  NumberInput,
} from "@components/Field";
import { addItemSchema } from "./components/schema";

export default function ItemAddPage() {
  const {
    formError,
    isFormValid,
    isLoading,
    handleChange,
    handleSubmit,
    register,
  } = useForm(addItemSchema);
  const navigate = useNavigate();

  async function onSubmit(data) {
    try {
      if (data.images) {
        const imgFormData = new FormData();
        imgFormData.append("image", data.images);

        const { url } = await uploadProductImage(imgFormData);
        data.images = [url];
      }

      await addProduct(data);
      alert("성공적으로 작성했습니다.");
      navigate("/items");
    } catch (err) {
      throw err;
    }
  }

  return (
    <PageWrapper>
      <Section>
        <Form
          isLoading={isLoading}
          error={formError}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Section.Header title="상품 등록하기">
            <Button type="submit" size="sm" disabled={!isFormValid}>
              등록
            </Button>
          </Section.Header>
          <Section.Content>
            <FieldItem>
              <FieldItem.Label htmlFor="images">상품 이미지</FieldItem.Label>
              <ImageUpload {...register("images")} onChange={handleChange} />
            </FieldItem>
            <FieldItem>
              <FieldItem.Label htmlFor="name">상품명</FieldItem.Label>
              <Input placeholder="상품명 입력해주세요" {...register("name")} />
            </FieldItem>
            <FieldItem>
              <FieldItem.Label htmlFor="description">상품 소개</FieldItem.Label>
              <Textarea
                placeholder="상품 소개를  입력해주세요"
                {...register("description")}
              />
            </FieldItem>
            <FieldItem>
              <FieldItem.Label htmlFor="price">판매 가격</FieldItem.Label>
              <NumberInput
                placeholder="판매 가격을 입력해주세요"
                step="100"
                formatter={toWon}
                {...register("price")}
              />
            </FieldItem>
            <FieldItem>
              <FieldItem.Label htmlFor="tags">태그</FieldItem.Label>
              <TagsInput
                label="태그"
                placeholder="태그를 입력해주세요"
                {...register("tags")}
                onChange={handleChange}
              />
            </FieldItem>
          </Section.Content>
        </Form>
      </Section>
    </PageWrapper>
  );
}
