import { getProduct } from "@/service/product";
import ProductDetail from "../../../_components/ProductDetail";
import { notFound } from "next/navigation";
import { isAxiosError } from "axios";

export default async function ItemDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  try {
    const detail = await getProduct(Number(id));

    return <ProductDetail detail={detail} />;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.status === 404) {
        notFound();
      }
    }

    throw new Error("페이지 정보를 가져오는데 문제가 생겼습니다.");
  }
}
