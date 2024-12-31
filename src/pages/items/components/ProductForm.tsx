import { useNavigate } from "react-router-dom";
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
import { Product } from "@type/product";
import useFormWithError from "@hooks/useFormWithError";
import { ProductFormSchema, ProductFormType } from "@schemas/product";
import { zodResolver } from "@hookform/resolvers/zod";

interface ProductFormProps {
  initialData?: Product;
  onProductSubmit: (formData: ProductFormType) => Promise<void>;
  isEdit?: boolean;
}

export default function ProductForm({
  initialData,
  onProductSubmit,
  isEdit = false,
}: ProductFormProps) {
  const {
    setValue,
    formError,
    register,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useFormWithError<ProductFormType>({
    mode: "onBlur",
    resolver: zodResolver(ProductFormSchema),
    defaultValues: {
      images: [],
      tags: [],
      ...initialData,
    },
  });

  const navigate = useNavigate();

  const redirect =
    isEdit && initialData ? `/items/${initialData.id}` : "/items";
  const message = isEdit
    ? "성공적으로 수정했습니다."
    : "성공적으로 작성했습니다.";

  async function onSubmit(data: ProductFormType) {
    try {
      await onProductSubmit(data);
      alert(message);
      navigate(redirect);
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
        <Section.Header title="상품 등록하기">
          <Button type="submit" size="sm" disabled={!isValid}>
            등록
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
  );
}
