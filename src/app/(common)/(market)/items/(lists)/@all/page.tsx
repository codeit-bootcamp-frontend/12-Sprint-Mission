import { Section } from "@/components/Section";
import { getProducts } from "@/service/product";
import ProductFilter from "../_components/ProductFilter";
import ProductList from "../_components/ProductList";

type ItemsPageQueryParams = {
  page?: string;
  orderBy?: string;
  keyword?: string;
  pageSize?: string;
};

export default async function AllListPage({
  searchParams,
}: {
  searchParams: Promise<ItemsPageQueryParams>;
}) {
  const { page, orderBy, keyword, pageSize } = await searchParams;
  const data = await getProducts({
    page: Number(page) || 1,
    orderBy: orderBy || "recent",
    keyword: keyword || "",
    pageSize: Number(pageSize) || 10,
  });

  return (
    <Section>
      <Section.Header title="전체 상품">
        <ProductFilter />
      </Section.Header>
      <Section.Content>
        <ProductList data={data} />
      </Section.Content>
    </Section>
  );
}
