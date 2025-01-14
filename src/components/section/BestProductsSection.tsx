import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { HttpException } from "../../utils/exceptions";
import ItemCard from "../ui/Item/ItemCard";
import "./BestProductsSection.css";
import { Product, fetchProducts } from "../../domains/product/index";
import { getPageLimit } from "../../utils/getPageLimit";
import { debounce } from "../../utils/debounce";

function BestProductsSection() {
  const [items, setItems] = useState<Product[]>([]);
  const [pageSize, setPageSize] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getProducts = async (limit: number): Promise<void> => {
    if (limit !== null) {
      try {
        const { list } = await fetchProducts("favorite", limit);
        setItems(list);
      } catch (error) {
        console.error(error);
        const message = error instanceof Error ? error.message : "알 수 없는 오류가 발생했습니다";
        setError(message);
      }
    }
  };

  const handleResize = useCallback(() => {
    const newPageSize = getPageLimit(window.innerWidth, "best");
    if (newPageSize !== pageSize) {
      setPageSize(newPageSize);
    }
  }, [pageSize]);

  useEffect(() => {
    setPageSize(getPageLimit(window.innerWidth, "best"));

    const debounceResize = debounce(handleResize, 300);
    window.addEventListener("resize", debounceResize);
    return () => window.removeEventListener("resize", debounceResize);
  }, [handleResize]);

  useEffect(() => {
    if (typeof pageSize === "number") {
      getProducts(pageSize);
    }
  }, [pageSize]);

  if (error) {
    return <div>오류: {error}</div>;
  }

  return (
    <section className="best-products">
      <h2 className="best-products-title">베스트 상품</h2>
      <div className="best-product-list">
        {items?.map((item) => (
          <Link to="/items" className="item-link">
            <ItemCard item={item} key={item.id}></ItemCard>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default BestProductsSection;
