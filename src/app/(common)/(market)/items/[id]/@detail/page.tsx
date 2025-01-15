import { getProduct } from "@/service/product";
import ProductDetail from "../../../_components/ProductDetail";
import { notFound } from "next/navigation";

export default async function ItemDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const detail = await getProduct(Number(id));

  if (!detail) {
    notFound();
  }

  return <ProductDetail detail={detail} />;
}
