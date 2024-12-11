import { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getList } from "../api";
import BestProduct from "../components/BestProductList";
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";
import styles from "./HomePage.module.css";
import SearchImg from "../img/search.png";
import ArrowImg from "../img/arrow_down.png";

function HomePage() {
  const [order, setOrder] = useState({
    orderby: "recent",
    page: 1,
    pageSize: 10,
  });
  const [bestItems, setBestItems] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [screenCategory, setScreenCategory] = useState(
    getScreenCategory(window.innerWidth)
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Helper function to categorize screen size
  function getScreenCategory(width) {
    if (width >= 768 && width <= 1199) return "tablet";
    if (width >= 375 && width <= 767) return "mobile";
    return "desktop";
  }

  // Helper function to calculate pageSize
  function getPageSize(screenCategory, type) {
    const pageSizeMap = {
      desktop: { best: 4, list: 10 },
      tablet: { best: 2, list: 6 },
      mobile: { best: 1, list: 4 },
    };
    return pageSizeMap[screenCategory]?.[type] || 10;
  }

  // Update pageSize based on screenCategory
  const updatePageSettings = useCallback(() => {
    setOrder((prev) => ({
      ...prev,
      pageSize: getPageSize(screenCategory, "list"),
    }));
  }, [screenCategory]);

  // Load BestProduct data
  const loadBestProducts = useCallback(async () => {
    try {
      const response = await getList({
        orderby: "favorite",
        page: 1,
        pageSize: getPageSize(screenCategory, "best"),
      });
      setBestItems(response.list || []);
    } catch (error) {
      console.error("Failed to load best products:", error);
    }
  }, [screenCategory]);

  // Load ProductList data
  const handleLoad = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getList({ ...order, keyword });
      setItems(response.list || []);
      const totalItems = response.totalCount || 0;
      setTotalPages(Math.ceil(totalItems / order.pageSize));
    } catch (error) {
      console.error("Failed to load products:", error);
    } finally {
      setLoading(false);
    }
  }, [order, keyword]);

  useEffect(() => {
    updatePageSettings();
    loadBestProducts();

    const handleResize = () => {
      const newCategory = getScreenCategory(window.innerWidth);
      if (newCategory !== screenCategory) {
        setScreenCategory(newCategory);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenCategory, updatePageSettings, loadBestProducts]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  const handleOrderChange = (selectedOrder) => {
    setOrder((prev) => ({ ...prev, orderby: selectedOrder, page: 1 }));
    setDropdownOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const trimmedSearch = searchValue.trim();
    setKeyword(trimmedSearch);
    setOrder((prev) => ({ ...prev, page: 1 }));
    navigate(`?search=${trimmedSearch || ""}`);
  };

  const handlePageChange = (newPage) => {
    setOrder((prev) => ({ ...prev, page: newPage }));
  };

  return (
    <div>
      <h2 className={styles.best_title}>베스트 상품</h2>
      <BestProduct items={bestItems} />
      <div className={styles.container}>
        <h2>전체상품</h2>
        <form className={styles.search} onSubmit={handleSearchSubmit}>
          <input
            placeholder="검색할 상품을 입력해주세요."
            name="keyword"
            type="search"
            value={searchValue}
            onChange={handleSearchChange}
          />
          <button className={styles.search_btn} type="submit">
            <img src={SearchImg} alt="돋보기" />
          </button>
        </form>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className={styles.register} type="button">
            상품 등록하기
          </button>
        </Link>
        {/* 드롭다운 */}
        <div className={styles.dropdown}>
          <div className={styles.dropdown_box}>
            <button
              className={styles.dropdown_button}
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              {order.orderby === "recent" ? "최신순" : "베스트순"}
              <img src={ArrowImg} alt="화살표 버튼" />
            </button>
          </div>
          {dropdownOpen && (
            <ul className={styles.dropdown_menu}>
              <li onClick={() => handleOrderChange("recent")}>최신순</li>
              <li onClick={() => handleOrderChange("favorite")}>베스트순</li>
            </ul>
          )}
        </div>
      </div>
      {loading ? <p>Loading...</p> : <ProductList items={items} />}
      <Pagination
        currentPage={order.page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default HomePage;
