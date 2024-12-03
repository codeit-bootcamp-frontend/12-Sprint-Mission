import { useEffect, useState } from "react";
import { getList } from "../api";
import ProductList from "../components/ProductList";
import styles from "./HomePage.module.css";
import SearchImg from "../img/search.png";
import { Link } from "react-router-dom";

function HomePage() {
  const [order, setOrder] = useState({ orderby: "recent" });
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleLoad = async (orderQuery) => {
    setLoading(true);
    try {
      const { list } = await getList(orderQuery);
      setItems(list);
    } catch (error) {
      console.error("Failed to load products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleLoad(order);
  }, [order]);

  const handleChangeOrder = (e) => {
    const selectedOrder = e.target.value;
    setOrder({ order: selectedOrder });
  };

  return (
    <>
      <div>
        <h2>베스트 상품</h2>
        <div className={styles.container}>
          <h2>전체상품</h2>
          <div className={styles.search}>
            <input
              placeholder="검색할 상품을 입력해주세요."
              name="search"
              type="search"
            />
            <img src={SearchImg} alt="돋보기" />
          </div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <button type="button">상품 등록하기</button>
          </Link>
          <select onChange={handleChangeOrder} value={order.orderby}>
            <option value="recent">최신순</option>
            <option value="favorite">베스트순</option>
          </select>
        </div>
        {loading ? <p>Loading...</p> : <ProductList items={items} />}
      </div>
    </>
  );
}

export default HomePage;
