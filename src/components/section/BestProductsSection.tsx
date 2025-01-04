import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { HttpException } from "../../utils/exceptions";
import ItemCard from "../ui/Item/ItemCard";
import "./BestProductsSection.css";
import { Product, fetchProducts } from "../../domains/product/index";

const getPageLimit = (width: number): number => {
  if (width > 1199) {
    return 4;
  } else if (width > 768) {
    return 2;
  } else {
    return 1;
  }
};

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
        if (error instanceof HttpException) {
          setError(error.message);
        } else {
          setError("알 수 없는 오류가 발생했습니다.");
        }
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
    const initialPageSize = getPageLimit(window.innerWidth);
    setPageSize(initialPageSize);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
