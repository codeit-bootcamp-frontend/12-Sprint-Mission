import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { useAuth } from "@context/AuthContext";
import { PageWrapper } from "@components/Page";
import useProductActions from "./components/useProductActions";
import { Section } from "@components/Section";
import {
  FieldItem,
  Form,
  ImageUpload,
  Input,
  NumberInput,
  TagsInput,
  Textarea,
} from "@components/Field";
import { Button } from "@components/ui";
import useFormWithError from "@hooks/useFormWithError";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductFormSchema, ProductFormType } from "@schemas/product";
import { Product } from "@type/product";

export default function ItemModifyPage() {
  const { detail } = useLoaderData() as { detail: Product };
  const {
    auth: { user },
  } = useAuth();
  const { handleProductModify } = useProductActions(detail.id);
  const navigate = useNavigate();

  if (user && user.id !== detail.ownerId) {
    alert("권한이 없습니다.");
    return <Navigate to="/items" replace />;
  }

  const {
    setValue,
    formError,
    register,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useFormWithError<ProductFormType>({
    mode: "onBlur",
    resolver: zodResolver(ProductFormSchema),
    defaultValues: detail,
  });

  async function onSubmit(data: ProductFormType) {
    try {
      await handleProductModify(data);
      alert("성공적으로 수정했습니다.");
      navigate(`/items/${detail.id}`);
    } catch (err) {
      throw err;
    }
  }

  return (
    <PageWrapper>
      <Section>
        <Form
          isLoading={isSubmitting}
          error={formError}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Section.Header title="상품 등록하기">
            <Button type="submit" size="sm" disabled={!isValid}>
              수정
            </Button>
          </Section.Header>
          <Section.Content>
            <FieldItem>
              <FieldItem.Label htmlFor="images">상품 이미지</FieldItem.Label>
              <ImageUpload
                {...register("images")}
                onChange={(value) =>
                  setValue("images", value, { shouldValidate: true })
                }
              />
            </FieldItem>
            <FieldItem>
              <FieldItem.Label htmlFor="name">상품명</FieldItem.Label>
              <Input placeholder="상품명 입력해주세요" {...register("name")} />
            </FieldItem>
            <FieldItem>
              <FieldItem.Label htmlFor="description">상품 소개</FieldItem.Label>
              <Textarea
                {...register("description")}
                placeholder="상품 소개를  입력해주세요"
              />
            </FieldItem>
            <FieldItem>
              <FieldItem.Label htmlFor="price">판매 가격</FieldItem.Label>
              <NumberInput
                {...register("price")}
                placeholder="판매 가격을 입력해주세요"
              />
            </FieldItem>
            <FieldItem>
              <FieldItem.Label htmlFor="tags">태그</FieldItem.Label>
              <TagsInput
                {...register("tags")}
                placeholder="태그를 입력해주세요"
                onChange={(value) =>
                  setValue("tags", value, {
                    shouldValidate: true,
                  })
                }
              />
            </FieldItem>
          </Section.Content>
        </Form>
      </Section>
    </PageWrapper>
  );
}
