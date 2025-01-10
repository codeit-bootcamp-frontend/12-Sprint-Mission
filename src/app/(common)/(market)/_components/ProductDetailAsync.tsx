import { getProduct } from "@/service/product";
import ProductDetail from "./ProductDetail";
import axios from "axios";
import { notFound } from "next/navigation";

export default async function ProductDetailAsync({ id }: { id: string }) {
  try {
    const detail = await getProduct(Number(id));

    if (!detail) {
      notFound();
    }

    return <ProductDetail detail={detail} />;
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
