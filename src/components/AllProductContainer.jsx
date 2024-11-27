import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";
import { getData } from "../api";

function AllProductContainer() {
  const [itemList, setItemList] = useState();
  const [pageSize, setPageSize] = useState(10);
  const [orderBy, setOrderBy] = useState("recent");

  const handleBestClick = () => setOrderBy("favorite");
  const handleNewestClick = () => setOrderBy("recent");

  useEffect(() => {
    getData({ pageSize, orderBy }).then((data) => setItemList(data));
  }, [pageSize, orderBy]);
  return (
    <div>
      <h2>전체 상품</h2>
      <div>
        <select
          onChange={(e) => {
            const selectedValue = e.target.value;
            if (selectedValue === "최신순") handleNewestClick();
            if (selectedValue === "베스트순") handleBestClick();
          }}
        >
          <option value="최신순">최신순</option>
          <option value="베스트순">베스트순</option>
        </select>
      </div>
      <div className="product_list">
        {itemList?.list?.map((item, index) => (
          <ProductItem
            key={index}
            imageUrl={item.images[0]}
            title={item.name}
            price={item.price}
            likeCount={item.favoriteCount}
            size={221}
          />
        ))}
      </div>
    </div>
  );
}

export default AllProductContainer;
