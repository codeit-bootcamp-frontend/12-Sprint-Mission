"use client";

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
import { Product } from "@type/product";
import { FieldAdapter } from "@components/adaptor/rhf";
import { useRouter } from "next/navigation";
import useProductActions from "./useProductActions";

interface ProductFormProps {
  initialData?: Product;
  mode?: "add" | "edit";
  productId?: number;
}

export default function ProductForm({
  initialData,
  mode = "add",
  productId,
}: ProductFormProps) {
  const router = useRouter();
  const { handleProductAdd, handleProductModify } =
    useProductActions(productId);
  const onFormSubmit = mode === "add" ? handleProductAdd : handleProductModify;

  const {
    control,
    formError,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useFormWithError<ProductFormType>({
    mode: "onBlur",
    resolver: zodResolver(ProductFormSchema),
    defaultValues: initialData || {
      images: [],
      name: "",
      description: "",
      price: 0,
      tags: [],
    },
  });

  async function onSubmit(data: ProductFormType) {
    try {
      await onFormSubmit(data);
      alert(
        mode === "add" ? "성공적으로 작성했습니다." : "성공적으로 수정했습니다."
      );
      router.replace(mode === "add" ? "/items" : `/items/${initialData?.id}`);
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
            <FieldAdapter
              name="images"
              control={control}
              render={(props) => <ImageUpload {...props} />}
            />
          </FieldItem>
          <FieldItem>
            <FieldItem.Label htmlFor="name">상품명</FieldItem.Label>
            <FieldAdapter
              name="name"
              control={control}
              render={(props) => (
                <Input
                  type="text"
                  placeholder="상품명 입력해주세요"
                  {...props}
                />
              )}
            />
          </FieldItem>
          <FieldItem>
            <FieldItem.Label htmlFor="description">상품 소개</FieldItem.Label>
            <FieldAdapter
              name="description"
              control={control}
              render={(props) => (
                <Textarea placeholder="상품 소개를  입력해주세요" {...props} />
              )}
            />
          </FieldItem>
          <FieldItem>
            <FieldItem.Label htmlFor="price">판매 가격</FieldItem.Label>
            <FieldAdapter
              name="price"
              control={control}
              render={(props) => (
                <NumberInput
                  placeholder="판매 가격을 입력해주세요"
                  {...props}
                />
              )}
            />
          </FieldItem>
          <FieldItem>
            <FieldItem.Label htmlFor="tags">태그</FieldItem.Label>
            <FieldAdapter
              name="tags"
              control={control}
              render={(props) => (
                <TagsInput placeholder="태그를 입력해주세요" {...props} />
              )}
            />
          </FieldItem>
        </Section.Content>
      </Form>
    </Section>
  );
}
