import { useEffect, useState } from "react";
import { getProducts } from "../../../api/itemsApi";
import ItemCard from "./ItemCard";

function BestItemsSection() {
  const [orderBy, setOrderBy] = useState("favorite");
  const [searchType, setSearchType] = useState("all");
  const [page, setPage] = useState(1);
  const [pageSize] = useState(4);
  const [items, setItems] = useState([]);

  const handleSortChange = (sortValue) => {
    setOrderBy(sortValue);
  };

  const handleSearchSubmit = () => {
    handleLoad();
  };

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
    handleLoad();
  }, [orderBy, searchType, page]);

  return (
    <section className="best-items">
      <div className="title-container">
        <h1>베스트 상품</h1>
      </div>
      <ul className="item-container col4">
        {items.map((item) => (
          <ItemCard items={item} key={item.id} />
        ))}
      </ul>
    </section>
  );
}

export default BestItemsSection;
