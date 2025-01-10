import { ListMode } from "@/types/article";
import { getProducts } from "@/service/product";
import ProductList from "./ProductList";
import BestList from "./BestList";

interface ItemsListProps {
  mode?: ListMode;
  page?: number;
  orderBy?: string;
  keyword?: string;
  pageSize?: number;
}

export default async function ProductListAsync({
  mode = "all",
  page = 1,
  orderBy = "recent",
  keyword = "",
  pageSize = 10,
}: ItemsListProps) {
  const data = await getProducts({
    page,
    pageSize,
    keyword,
    orderBy,
  });

  const Component = mode === "all" ? ProductList : BestList;

  return <Component mode={mode} data={data} />;
}
