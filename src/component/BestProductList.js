import BestProductItem from "./BestProductItem";
import "./BestProductList.css";
import { getProduct } from "../api";
import { useEffect, useState } from "react";

function BestProductList() {
  const [items, setItems] = useState([]);
  const handleLoad = async () => {
    let result = await getProduct();
    const { list } = result;
    setItems(list);
  };
  useEffect(() => {
    handleLoad();
  }, []);
  console.log(items);

  return (
    <div className="bestsection">
      <div className="bestsection-container">
        <h1>베스트 상품</h1>
        <div className="bestproduct-list">
          {items.map((item) => {
            return <BestProductItem item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default BestProductList;
