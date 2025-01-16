import { PageWrapper } from "@/components/Page";
import ProductForm from "../../_components/ProductForm";
import { getProduct } from "@/service/product";
import { auth } from "@/auth";
import { Suspense } from "react";
import { Message } from "@/components/ui";
import { notFound, redirect } from "next/navigation";
import { isAxiosError } from "axios";
import { isRedirectError } from "next/dist/client/components/redirect-error";

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
    if (isAxiosError(error)) {
      if (error.status === 404) {
        notFound();
      }
    }

    if (isRedirectError(error)) {
      throw error;
    }

    throw new Error("페이지 정보를 가져오는데 문제가 생겼습니다.");
  }
}
