import { useEffect, useState } from "react";
import { getProducts } from "../../../api/itemsApi";
import { ReactComponent as SearchIcon } from "../../../assets/images/icons/ic_search.svg";
import { ReactComponent as SortIcon } from "../../../assets/images/icons/ic_sort.svg";
import Dropdown from "../../../components/util/Dropdown";
import ItemCard from "./ItemCard";
import Pagination from "../../../components/util/Pagination";

function AllItemsSection() {
  const [orderBy, setOrderBy] = useState("recent");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("all");
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [items, setItems] = useState([]);
  const [dropdownState, setDropdownState] = useState();

  const handleSortChange = (sortValue) => {
    setOrderBy(sortValue);
    setDropdownState(false);
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

  const toggleDropdown = () => {
    setDropdownState(!dropdownState);
  };

  return (
    <section className="all-items">
      <div className="title-container">
        <h1>전체 상품</h1>
        <div className="search-wrapper">
          <div className="search-box">
            <SearchIcon />
            <input
              className="search-input"
              placeholder="검색할 상품을 입력해 주세요"
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearchSubmit();
              }}
            />
          </div>
          <a href="#" className="button round-button">
            상품 등록하기
          </a>
          <div className="sort-box">
            <button type="button" onClick={toggleDropdown}>
              {orderBy === "recent" ? "최신순" : "인기순"}
              <SortIcon />
            </button>
            <Dropdown
              onSortChange={handleSortChange}
              dropdownState={dropdownState}
            />
          </div>
        </div>
      </div>
      <ul className="item-container col5">
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
