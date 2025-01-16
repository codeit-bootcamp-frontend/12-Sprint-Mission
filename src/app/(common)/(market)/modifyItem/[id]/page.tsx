import { PageWrapper } from "@/components/Page";
import ProductForm from "../../_components/ProductForm";
import { getProduct } from "@/service/product";
import { auth } from "@/auth";
import { Suspense } from "react";
import { Message } from "@/components/ui";
import { notFound, redirect } from "next/navigation";
import { AxiosError } from "axios";

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
      throw new Error("NO_PERMISSION");
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
    if (error instanceof AxiosError) {
      if (error.status === 404) {
        notFound();
      }
    }

    if (error instanceof Error) {
      if (error.message === "NO_PERMISSION") {
        redirect("/items");
      }
    }

    throw new Error("페이지 정보를 가져오는데 문제가 생겼습니다.");
  }
}
