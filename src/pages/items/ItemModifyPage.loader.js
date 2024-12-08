import { getProduct } from "@service/product";

export default async function loader({ params }) {
  const { id } = params;
  const detail = await getProduct(id);

  return { detail };
}
