import { useState, useEffect } from "react";
import { getData } from "../../api";
import ProductItem from "../common/product";
import "./BestProducts.css";
import useDevice from "../../hooks/useDevice";

function BestProducts() {
  const [itemList, setItemList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [size, setSize] = useState(282);

  const { mode } = useDevice();

  //베스트상품 가져오기
  useEffect(() => {
    const fetchBestItems = async () => {
      let pageSize = 4;
      if (mode === "tablet") {
        pageSize = 2;
        setSize(343);
      } else if (mode === "mobile") {
        pageSize = 1;
        setSize(343);
      } else {
        setSize(282);
      }

      const data = await getData({
        page: currentPage,
        pageSize: pageSize,
        orderBy: "favorite",
      });
      setItemList(data.list);
    };
    fetchBestItems();
  }, [mode]); //베스트 상품은 pagination 없으니 일단 한번만 실행

  return (
    <section className="best-section">
      <h2>베스트 상품</h2>
      <ul className={`product-list ${mode}`}>
        {" "}
        {itemList.map((item) => (
          <li key={item.id}>
            {" "}
            <ProductItem
              imageUrl={item.images[0]}
              name={item.name}
              price={item.price}
              likeCount={item.favoriteCount}
              size={size}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BestProducts;
