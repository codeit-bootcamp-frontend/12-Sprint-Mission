import { PageWrapper } from "@/components/Page";
import ProductForm from "../../_components/ProductForm";
import { getProduct } from "@/service/product";
import { auth } from "@/auth";
import { Suspense } from "react";
import { Message } from "@/components/ui";
import { notFound, redirect } from "next/navigation";

export default async function ModifyItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth();
  const id = (await params).id;
  const detail = await getProduct(Number(id));
  const isOwner = detail.ownerId === Number(session?.user.id);

  if (!detail) {
    notFound();
  }

  if (!isOwner) {
    redirect("/items");
  }

  return (
    <PageWrapper>
      <Suspense fallback={<Message>상품정보를 가져오는 중입니다...</Message>}>
        <ProductForm mode="edit" initialData={detail} productId={Number(id)} />
      </Suspense>
    </PageWrapper>
  );
}
