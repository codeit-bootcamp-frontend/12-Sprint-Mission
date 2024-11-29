import { fetchProducts } from "../../api/product";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  const getProducts = async () => {
    const { list } = await fetchProducts(sortOption, pageSize);
    setItems(list);
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
