import { fetchProducts } from "../../domains/product/index";
import { useCallback, useEffect, useState } from "react";
import { HttpException } from "../../utils/exceptions";
import ItemCard from "../ui/Item/ItemCard";
import "./AllProductsSection.css";
import { SortOption, Product } from "../../domains/product/index";
import { getPageLimit } from "../../utils/getPageLimit";
import { debounce } from "../../utils/debounce";

interface AllProductsSectionProps {
  sortOption: SortOption;
}

function AllProductsSection({ sortOption }: AllProductsSectionProps) {
  const [items, setItems] = useState<Product[]>([]);
  const [pageSize, setPageSize] = useState(getPageLimit(window.innerWidth, "all"));
  const [error, setError] = useState<string | null>(null);

  const getProducts = async (limit: number, sort: SortOption): Promise<void> => {
    try {
      const { list } = await fetchProducts(sort, limit);
      setItems(list);
    } catch (error) {
      console.error(error);
      const message = error instanceof Error ? error.message : "알 수 없는 오류가 발생했습니다";
      setError(message);
    }
  };

  const handleResize = useCallback(() => {
    const newPageSize = getPageLimit(window.innerWidth, "all");
    if (newPageSize !== pageSize) {
      setPageSize(newPageSize);
    }
  }, [pageSize]);

  useEffect(() => {
    const debounceResize = debounce(handleResize, 300);
    window.addEventListener("resize", debounceResize);
    return () => window.removeEventListener("resize", debounceResize);
  }, [handleResize]);

  useEffect(() => {
    if (pageSize !== null) {
      getProducts(pageSize, sortOption);
    }
  }, [sortOption, pageSize]);

  if (error) {
    return <div>오류: {error}</div>;
  }

  return (
    <section className="all-products">
      <div className="all-products-list">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default AllProductsSection;
