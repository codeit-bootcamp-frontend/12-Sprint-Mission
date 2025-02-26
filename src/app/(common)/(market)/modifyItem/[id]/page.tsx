"use client";

import { PageWrapper } from "@/components/Page";
import { notFound, redirect, useParams } from "next/navigation";
import ProductModifyForm from "../../_components/ProductModifyForm";
import { useSession } from "next-auth/react";
import { useGetProduct } from "@/service/product.queries";
import { Loading } from "@/components/ui/Loading";

export default function ModifyItemPage() {
  const { data: session } = useSession();
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);

  const { data: detail, isPending } = useGetProduct(productId);

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
      <ProductModifyForm initialData={detail} />
    </PageWrapper>
  );
}
