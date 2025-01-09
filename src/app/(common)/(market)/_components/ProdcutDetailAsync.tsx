import { getProduct } from "@/service/product";
import ProductDetail from "./ProductDetail";

export default async function ProdcutDetailAsync({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const detail = await getProduct(Number(id));

  return <ProductDetail detail={detail} />;
}
