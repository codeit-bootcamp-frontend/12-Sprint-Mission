import AllProductItem from "./AllProductItem";
import "./AllProductList.css";
import { getProduct } from "../api";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import PageButton from "./PageButton";

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
  }, [orderBy]);

  const handleOrder = (value) => {
    setOrderBy(value);
  };

  return (
    <div className="allsection">
      <div className="allsection-container">
        <NavBar handleOrder={handleOrder} />
        <div className="allproduct-list">
          {items.map((item) => {
            return <AllProductItem key={item.id} item={item} />;
          })}
        </div>
        <PageButton />
      </div>
    </div>
  );
}

export default AllProductList;
