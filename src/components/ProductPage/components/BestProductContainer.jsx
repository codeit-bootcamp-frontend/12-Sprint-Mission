import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";
import { getData } from "../../../api";
import { NavLink } from "react-router-dom";
import "./BestProductContainer.css";

function BestProductContainer() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const fetchBestProduct = async () => {
      const data = await getData({
        pageSize: 4,
        orderBy: "favorite",
      });
      return data;
    };
    fetchBestProduct().then((res) => setItemList(res));
  }, []);

  return (
    <>
      <h2>베스트 상품</h2>
      <div className="product_list">
        {itemList?.list?.map((item) => (
          <NavLink to={`/items/${item.id}`}>
            <ProductItem
              imageUrl={item.images[0]}
              title={item.name}
              price={item.price}
              likeCount={item.favoriteCount}
              size={282}
            />
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default BestProductContainer;
