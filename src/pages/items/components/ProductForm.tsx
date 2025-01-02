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
import { ProductFormSchema, ProductFormType } from "@schemas/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { Controller } from "react-hook-form";
import { Product } from "@type/product";

interface ProductFormProps {
  initialData?: Product;
  mode?: "add" | "edit";
  onFormSubmit: (formData: ProductFormType) => Promise<void>;
}

export default function ProductForm({
  initialData,
  mode = "add",
  onFormSubmit,
}: ProductFormProps) {
  const navigate = useNavigate();

  const {
    control,
    formError,
    register,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useFormWithError<ProductFormType>({
    mode: "onChange",
    resolver: zodResolver(ProductFormSchema),
    defaultValues: initialData || {
      price: 0,
      images: [],
      tags: [],
    },
  });

  async function onSubmit(data: ProductFormType) {
    try {
      await onFormSubmit(data);
      alert(
        mode === "add" ? "성공적으로 작성했습니다." : "성공적으로 수정했습니다."
      );
      navigate(mode === "add" ? "/items" : `/items/${initialData?.id}`);
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
            {mode === "add" ? "등록" : "수정"}
          </Button>
        </Section.Header>
        <Section.Content>
          <FieldItem>
            <FieldItem.Label htmlFor="images">상품 이미지</FieldItem.Label>
            <Controller
              name="images"
              control={control}
              render={({ field, fieldState }) => (
                <ImageUpload {...field} {...fieldState} />
              )}
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
            <Controller
              name="price"
              control={control}
              render={({ field, fieldState }) => (
                <NumberInput
                  {...field}
                  {...fieldState}
                  placeholder="판매 가격을 입력해주세요"
                />
              )}
            />
          </FieldItem>
          <FieldItem>
            <FieldItem.Label htmlFor="tags">태그</FieldItem.Label>
            <Controller
              name="tags"
              control={control}
              render={({ field, fieldState }) => (
                <TagsInput
                  {...field}
                  {...fieldState}
                  placeholder="태그를 입력해주세요"
                />
              )}
            />
          </FieldItem>
        </Section.Content>
      </Form>
    </Section>
  );
}
