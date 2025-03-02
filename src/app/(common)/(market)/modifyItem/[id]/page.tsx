"use client";

import { notFound, redirect, useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { useGetProduct, useProductModify } from "@/service/product.queries";
import { PageWrapper } from "@/components/Page";
import { Loading } from "@/components/ui";
import ProductForm from "@/components/market/ProductForm";

export default function ModifyItemPage() {
  const { data: session } = useSession();
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);

  const { data: detail, isPending } = useGetProduct(productId);
  const { mutateAsync: handleProductModify } = useProductModify(productId);

  if (isPending) {
    return <Loading>상품 정보를 가져오는 중입니다.</Loading>;
  }

  if (!detail) {
    notFound();
  }

  const isOwner = detail.ownerId === Number(session?.user.id);
  if (!isOwner) {
    redirect("/items");
  }

  return (
    <PageWrapper>
      <ProductForm
        mode="edit"
        onFormSubmit={handleProductModify}
        initialData={detail}
      />
    </PageWrapper>
  );
}
