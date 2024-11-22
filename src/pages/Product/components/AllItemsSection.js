import { useEffect, useState } from "react";
import { getProducts } from "../../../api/itemsApi";
import ItemCard from "./ItemCard";

function AllItemsSection() {
  const [orderBy, setOrderBy] = useState("recent");
  const [items, setItems] = useState([]);
  const sortedItems = items.sort((a, b) => b[orderBy] - a[orderBy]);

  const handleNewestClick = () => setOrderBy("recent");
  const handleBestClick = () => setOrderBy("favorite");

  const handleLoad = async (orderQuery) => {
    const products = await getProducts(orderQuery);
    setItems(products.list);
  };

  useEffect(() => {
    handleLoad(orderBy);
  }, [orderBy]);

  return (
    <section className="all-items">
      <div className="title-container">
        <h1>전체 상품</h1>
        <div className="search-wrapper">
          <div>
            <button type="button">최신순</button>
            <div>
              <span onClick={handleNewestClick}>최신순</span>
              <span onClick={handleBestClick}>좋아요순</span>
            </div>
          </div>
        </div>
      </div>
      <ul className="item-container">
        {sortedItems.map((item) => {
          return <ItemCard items={item} key={item.id} />;
        })}
      </ul>
    </section>
  );
}

export default AllItemsSection;
