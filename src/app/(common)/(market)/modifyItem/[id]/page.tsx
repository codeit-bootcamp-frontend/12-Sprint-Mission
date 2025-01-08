import { PageWrapper } from "@/components/Page";
import ProductForm from "../../_components/ProductForm";
import { getProduct } from "@/service/product";
import { auth } from "@/app/api/auth/auth";
import { redirect } from "next/navigation";

export default async function ModifyItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  const id = (await params).id;
  const detail = await getProduct(Number(id));

  return (
    <PageWrapper>
      <ProductForm mode="edit" initialData={detail} productId={Number(id)} />
    </PageWrapper>
  );
}
