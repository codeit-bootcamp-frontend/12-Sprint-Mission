import { useState, useEffect } from "react";
import { getData } from "../../api";
import ProductItem from "../common/product";
import "./BestProducts.css";

function BestProducts() {
  const [itemList, setItemList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  //베스트상품 가져오기
  useEffect(() => {
    const fetchBestItems = async () => {
      const data = await getData({
        page: currentPage,
        pageSize: 4,
        orderBy: "favorite",
      });
      setItemList(data.list);
    };
    fetchBestItems();
  }, []); //베스트 상품은 pagination 없으니 일단 한번만 실행

  return (
    <section className="best-section">
      <h2>베스트 상품</h2>
      <ul className="product-list">
        {" "}
        {itemList.map((item) => (
          <li key={item.id}>
            {" "}
            <ProductItem
              imageUrl={item.images[0]}
              name={item.name}
              price={item.price}
              likeCount={item.favoriteCount}
              size={282}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BestProducts;
