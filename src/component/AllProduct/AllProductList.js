import AllProductItem from "./AllProductItem";
import "./AllProductList.css";
import { getProduct } from "../../api";
import { useEffect, useState } from "react";
import NavBar from "../Navigation/NavBar";
import PageButton from "../Pagination/PageButton";

function AllProductList() {
  const [items, setItems] = useState([]);
  const [orderBy, setOrderBy] = useState("recent");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handleLoad = async (value) => {
    const result = await getProduct(value);
    const { list } = result;
    setItems(list);
  };
  useEffect(() => {
    handleLoad({ page, pageSize, orderBy });
  }, [page, pageSize, orderBy]);

  const handleOrder = (value) => {
    setOrderBy(value);
    setPage(1);
  };

  const handlePage = (value) => {
    setPage(value);
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
      </div>
      <PageButton handlePage={handlePage} page={page} />
    </div>
  );
}

export default AllProductList;
