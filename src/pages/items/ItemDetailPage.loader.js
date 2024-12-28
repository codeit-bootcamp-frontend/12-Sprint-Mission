import { getProduct } from "@service/product";
import { getComments } from "@service/comments";

export default async function loader({ params }) {
  const { id } = params;

  const comments = getComments("products", { productId: id, limit: 5 });
  const detail = await getProduct(id);

  return { detail, comments };
}
