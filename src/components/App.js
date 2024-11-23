import { useEffect, useState } from "react";
import productList from "../Api";
import ItemList from "./ItemList";
import Header from "./Header";
import "../css/Reset.css";
import "../css/App.css";

function App() {
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
      const { list } = await productList({ orderBy: "favorite" });
      const sortBestItems = [...list]
        .sort((a, b) => b.favoriteCount - a.favoriteCount)
        .slice(0, 4);
      setBestItems(sortBestItems);
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
    <div className="App">
      <Header></Header>
      <section className="products__section">
        <div className="favorite-products__container">
          <h2>베스트 상품</h2>
          <ItemList items={bestItems}></ItemList>
        </div>
        <div className="all-products__container">
          <h2>전체 상품</h2>
          <ItemList items={allItems}></ItemList>
        </div>
      </section>
    </div>
  );
}

export default App;
