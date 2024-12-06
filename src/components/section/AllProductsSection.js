import { fetchProducts } from "../../api/product";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HttpException } from "../../utils/exceptions";
import ItemCard from "../ui/Item/ItemCard";
import "./AllProductsSection.css";

const getPageSize = () => {
  const width = window.innerWidth;
  if (width > 1199) {
    return 10;
  } else if (width > 768) {
    return 6;
  } else {
    return 4;
  }
};

function AllProductsSection({ sortOption }) {
  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(getPageSize());
  const [error, setError] = useState(null);

  const getProducts = async () => {
    try {
      const { list } = await fetchProducts(sortOption, pageSize);
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
    const newPageSize = getPageSize();
    if (newPageSize !== pageSize) {
      setPageSize(newPageSize);
    }
  }, [pageSize]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    getProducts();
  }, [sortOption, pageSize]);

  if (error) {
    return <div>오류: {error}</div>;
  }

  return (
    <section className="all-products">
      <div className="all-products-list">
        {items.map((item) => (
          <Link className="item-link" key={item.id}>
            <ItemCard item={item}></ItemCard>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default AllProductsSection;
