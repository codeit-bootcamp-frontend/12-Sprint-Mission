import { useEffect, useState } from "react";
import productList from "../../Api.js";
import ItemList from "../../components/ItemList/ItemList.jsx";
import "./Home.css";

function Home() {
  const [allItems, setAllItems] = useState([]);
  const [bestItems, setBestItems] = useState([]);

  const loadAllItems = async () => {
    try {
      const { list } = await productList({ orderBy: "recent" });
      setAllItems(list);
    } catch (error) {
      console.error("전체 상품 데이터를 불러오는 중 오류 발생:", error.message);
    }
  };

  const loadBestItems = async () => {
    try {
      const { list } = await productList({ orderBy: "favorite", pageSize: 4 });
      setBestItems(list);
    } catch (error) {
      console.error(
        "베스트 상품 데이터를 불러오는 중 오류 발생:",
        error.message
      );
    }
  };

  useEffect(() => {
    loadAllItems();
    loadBestItems();
  }, []);

  const handleSortClick = () => {
    setOrderBy((prevOrderBy) =>
      prevOrderBy === "recent" ? "favorite" : "recent"
    );
  };

  return (
    <section className="products__section">
      <div className="favorite-products__container">
        <h1>베스트 상품</h1>
        <ItemList items={bestItems} layoutType="flex"></ItemList>
      </div>
      <div className="all-products__container">
        <div className=""></div>
        <h1>전체 상품</h1>
        <ItemList items={allItems} layoutType="grid"></ItemList>
      </div>
    </section>
  );
}

export default Home;
