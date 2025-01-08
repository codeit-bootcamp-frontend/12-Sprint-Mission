import { Params, redirect } from "react-router-dom";
import { getProduct } from "@service/product";

export default async function loader({ params }: { params: Params }) {
  const { id } = params;
  if (!id) {
    return redirect("/items");
  }

  const detail = await getProduct(Number(id));

  return { detail };
}
