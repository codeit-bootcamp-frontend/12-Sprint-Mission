import { useEffect, useState } from "react";
import productList from "../../Api.js";
import ItemList from "../../components/ItemList/ItemList.jsx";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  const [allItems, setAllItems] = useState([]);
  const [bestItems, setBestItems] = useState([]);
  const [selectedOption, setSelectedOption] = useState("최신순");
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

  const handleOptionClick = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <section className="products-section">
      <div className="favorite-products__container">
        <h1 className="products-section__title--best">베스트 상품</h1>
        <ItemList items={bestItems} layoutType="flex"></ItemList>
      </div>
      <div className="all-products__container">
        <div className="all-products__header">
          <h1 className="products-section__title--all">전체 상품</h1>
          <form className="all-products__search-container">
            <input
              type="text"
              placeholder="검색할 상품을 입력해주세요"
              className="all-products__input"
            />
            <Link to="/additem" className="all-products__add-button">
              상품 등록하기
            </Link>
            <select
              value={selectedOption}
              onChange={handleOptionClick}
              className="dropDown-products"
            >
              <option value="최신순">최신순</option>
              <option value="인기순">인기순</option>
            </select>
          </form>
        </div>
        <ItemList items={allItems} layoutType="grid"></ItemList>
      </div>
    </section>
  );
}

export default Home;
