import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { useAuth } from "@context/AuthContext";
import useForm from "@hooks/useForm";
import {
  getProduct,
  modifyProduct,
  uploadProductImage,
} from "@service/product";
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

export default function ItemModifyPage() {
  const navigate = useNavigate();
  const { detail } = useLoaderData();
  const { id, images, name, description, price, tags } = detail;
  const {
    auth: { user },
  } = useAuth();

  if (user.id !== detail.ownerId) {
    alert("권한이 없습니다.");
    return <Navigate to="/items" replace />;
  }

  const {
    formError,
    isFormValid,
    isLoading,
    handleChange,
    handleSubmit,
    register,
  } = useForm(addItemSchema, {
    images: images[0],
    name,
    description,
    price,
    tags,
  });

  async function onSubmit(data) {
    try {
      if (data.images !== images[0]) {
        const imgFormData = new FormData();
        imgFormData.append("image", data.images);

        const { url } = await uploadProductImage(imgFormData);
        data.images = [url];
      }

      await modifyProduct(id, data);
      alert("성공적으로 수정했습니다.");
      navigate(`/items/${id}`);
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

async function loader({ params }) {
  const { id } = params;
  const detail = await getProduct(id);

  return { detail };
}

ItemModifyPage.loader = loader;
