import { fetchProducts } from "../../domains/product/index";
import { useCallback, useEffect, useState } from "react";
import { HttpException } from "../../utils/exceptions";
import ItemCard from "../ui/Item/ItemCard";
import "./AllProductsSection.css";
import { SortOption, Product } from "../../domains/product/index";

interface AllProductsSectionProps {
  sortOption: SortOption;
}

const getPageLimit = (width: number): number => {
  if (width > 1199) {
    return 10;
  } else if (width > 768) {
    return 6;
  } else {
    return 4;
  }
};

function AllProductsSection({ sortOption }: AllProductsSectionProps) {
  const [items, setItems] = useState<Product[]>([]);
  const [pageSize, setPageSize] = useState(getPageLimit(window.innerWidth));
  const [error, setError] = useState<string | null>(null);

  const getProducts = async (limit: number, sort: SortOption): Promise<void> => {
    try {
      const { list } = await fetchProducts(sort, limit);
      setItems(list);
    } catch (error) {
      if (error instanceof HttpException) {
        setError(error.message);
      } else {
        setError("알 수 없는 오류가 발생했습니다.");
      }
    }
  };

  const handleResize = useCallback(() => {
    const newPageSize = getPageLimit(window.innerWidth);
    if (newPageSize !== pageSize) {
      setPageSize(newPageSize);
    }
  }, [pageSize]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
