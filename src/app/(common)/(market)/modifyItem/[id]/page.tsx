import { PageWrapper } from "@/components/Page";
import ProductForm from "../../_components/ProductForm";
import { getProduct } from "@/service/product";
import { auth } from "@/auth";
import { notFound, redirect } from "next/navigation";
import { Suspense } from "react";
import { Message } from "@/components/ui";
import axios from "axios";

export default async function ModifyItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth();
  const id = (await params).id;

  try {
    const detail = await getProduct(Number(id));
    const isOwner = detail.ownerId === Number(session?.user.id);

    if (!isOwner) {
      redirect("/items");
    }

    return (
      <PageWrapper>
        <Suspense fallback={<Message>상품정보를 가져오는 중입니다...</Message>}>
          <ProductForm
            mode="edit"
            initialData={detail}
            productId={Number(id)}
          />
        </Suspense>
      </PageWrapper>
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.status === 404) {
        notFound();
      }

      throw new Error("상품 정보를 가져오는데 실패했습니다");
    }

    throw new Error("알 수 없는 에러가 발생했습니다.");
  }
}
