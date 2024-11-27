import { useEffect, useState } from "react";
import { getProducts } from "../../../api/itemsApi";
import ItemCard from "./ItemCard";

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    return 1;
  } else if (width < 1200) {
    return 2;
  } else {
    return 4;
  }
};

function BestItemsSection() {
  const [orderBy, setOrderBy] = useState("favorite");
  const [searchType, setSearchType] = useState("all");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(getPageSize());
  const [items, setItems] = useState([]);

  const handleLoad = async () => {
    const params = {};
    if (orderBy) params.orderBy = orderBy;
    if (searchType) params.type = searchType;
    if (page !== null) params.page = page;
    if (pageSize) params.pageSize = pageSize;

    const products = await getProducts(params);
    setItems(products.list);
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

    window.addEventListener("resize", handleResize);

    handleLoad();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [orderBy, searchType, page, pageSize]);

  const itemClassName = `item-container col-${getPageSize()}`;

  return (
    <section className="best-items">
      <div className="title-container">
        <h1>베스트 상품</h1>
      </div>
      <ul className={itemClassName}>
        {items.map((item) => (
          <ItemCard items={item} key={item.id} />
        ))}
      </ul>
    </section>
  );
}

export default BestItemsSection;
