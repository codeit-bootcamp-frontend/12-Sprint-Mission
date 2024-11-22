import { useEffect, useState } from "react";
import { getProducts } from "../../../api/itemsApi";
import ItemCard from "./ItemCard";
import { ReactComponent as SearchIcon } from "../../../assets/images/icons/ic_search.svg";
import { ReactComponent as SortIcon } from "../../../assets/images/icons/ic_sort.svg";
import Pagination from "../../../components/util/Pagination";

function AllItemsSection() {
  const [orderBy, setOrderBy] = useState("recent");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("all");
  const [page, setPage] = useState(1);
  const [pageSize] = useState(6);
  const [items, setItems] = useState([]);

  const handleSortChange = (sortValue) => {
    setOrderBy(sortValue);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = () => {
    handleLoad();
  };

  const handleLoad = async () => {
    const params = {};
    if (orderBy) params.orderBy = orderBy;
    if (searchType) params.type = searchType;
    if (searchTerm) params.keyword = searchTerm;
    if (page !== null) params.page = page;
    if (pageSize) params.pageSize = pageSize;

    const products = await getProducts(params);
    setItems(products.list);
  };

  useEffect(() => {
    handleLoad();
  }, [orderBy, searchTerm, searchType, page]);

  return (
    <section className="all-items">
      <div className="title-container">
        <h1>전체 상품</h1>
        <div className="search-wrapper">
          <div className="search-box">
            <SearchIcon />
            <input
              className="searchInput"
              placeholder="검색할 상품을 입력해 주세요"
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearchSubmit();
              }}
            />
          </div>
          <a href="#">상품 등록하기</a>
          <div className="sort-box">
            <button type="button">
              <strong>{orderBy === "recent" ? "최신순" : "좋아요순"}</strong>
              <SortIcon />
            </button>
            <div>
              <span onClick={() => handleSortChange("recent")}>최신순</span>
              <span onClick={() => handleSortChange("favorite")}>좋아요순</span>
            </div>
          </div>
        </div>
      </div>
      <ul className="item-container">
        {items.map((item) => (
          <ItemCard items={item} key={item.id} />
        ))}
      </ul>
      {/* 
        TODO : 페이지네이션 기능 구현
      */}
      <Pagination />
    </section>
  );
}

export default AllItemsSection;
