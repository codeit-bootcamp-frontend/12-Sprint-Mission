import AllProductItem from "./AllProductItem";
import "./AllProductList.css";
import { getProduct } from "../api";
import { useEffect, useState } from "react";

function AllProductList() {
  const [items, setItems] = useState([]);
  const [orderBy, setOrderBy] = useState("recent");
  const [pageSize, setPageSize] = useState(10);
  const handleLoad = async (value) => {
    let result = await getProduct(value);
    const { list } = result;
    setItems(list);
  };
  useEffect(() => {
    handleLoad({ pageSize, orderBy });
  }, []);

  return (
    <div className="allsection">
      <div className="allsection-container">
        <h1>전체상품</h1>
        <div className="allproduct-list">
          {items.map((item) => {
            return <AllProductItem key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default AllProductList;
