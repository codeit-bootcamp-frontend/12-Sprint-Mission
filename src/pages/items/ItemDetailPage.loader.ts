import { Params, redirect } from "react-router-dom";
import { getProduct } from "@service/product";
import { getComments } from "@service/comments";

export default async function loader({ params }: { params: Params }) {
  const { id } = params;

  if (!id) {
    return redirect("/items");
  }

  const comments = getComments("products", { productId: Number(id), limit: 5 });
  const detail = await getProduct(Number(id));

  return { detail, comments };
}
