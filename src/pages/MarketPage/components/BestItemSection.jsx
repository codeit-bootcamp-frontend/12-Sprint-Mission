import { useEffect } from "react";
import { useState } from "react";
import { getProduct } from "../../../api/ItemApi";
import "../MarketPage";
import ItemCard from "./ItemCard";

const getPageSize = () => {
  const width = window.innerWidth;

  if (width < 768) {
    return 1;
  } else if (width < 1280) {
    return 2;
  } else {
    return 4;
  }
};

function BestItemSection() {
  const [itemList, setItemList] = useState([]);
  const [pageSize, setPageSize] = useState(getPageSize());

  const loadProductList = async ({ orderBy, pageSize }) => {
    const products = await getProduct({ orderBy, pageSize });
    setItemList(products.list);
  };

  useEffect(() => {
    const handleReSize = () => {
      setPageSize(getPageSize());
    };

    window.addEventListener("resize", handleReSize);

    loadProductList({ orderBy: "favorite", pageSize });
  }, [pageSize]);

  return (
    <div className="bestItemContainer">
      <h1 className="sectionTitle">베스트 상품</h1>
      <div className="bestItemList">
        {itemList?.map((item) => (
          <ItemCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default BestItemSection;
