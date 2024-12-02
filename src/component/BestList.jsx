import React, { useEffect, useState } from "react";
import "./BestList.css";
import { getProduct } from "../Api";

function BestItemList() {
  const [itemList, setItemList] = useState([]);
  const [listpage, setListPageSize] = useState(1);

  useEffect(() => {
    const fetchBestitem = async () => {
      const product = await getProduct({
        page: listpage,
        PageSize: 4,
        orderBy: "favorit",
      });
      setItemList(product.list);
    };
    fetchBestitem();
  }, []);

  return (
    <div className="best-item">
      <h2>베스트 상품</h2>
      <BestItemList
        key={item.id}
        imageUrl={item.imgaes[0]}
        title={item.name}
        price={item.price}
        likeCount={item.favoriteCount}
        size={282}
      />
      <div className="item-list-seet"></div>
    </div>
  );
}

export default BestItemList;
