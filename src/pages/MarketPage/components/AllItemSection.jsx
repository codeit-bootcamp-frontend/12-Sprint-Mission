import { useEffect } from "react";
import { useState } from "react";
import { getProductList } from "../../../api/ItemApi";
import ItemCard from "./ItemCard";
import searchIcon from "../../../images/ic_search.png";
import dropdownIcon from "../../../images/ic_arrow_down.png";
import { Link } from "react-router-dom";
import PaginationBar from "../../../components/UI/PaginationBar";
import SortSelect from "../../../components/UI/onSortSelect";

const getPageSize = () => {
  const width = window.innerWidth;

  if (width < 768) {
    return 4;
  } else if (width < 1280) {
    return 6;
  } else {
    return 10;
  }
};

function AllItemSection() {
  const [itemList, setItemList] = useState([]);
  const [orderBy, setOrderBy] = useState("recent");
  const [pageSize, setPageSize] = useState(getPageSize());
  const [page, setPage] = useState(1);
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const [totalPageNum, setTotalPageNum] = useState();

  const loadProductList = async ({ orderBy, page, pageSize }) => {
    const products = await getProductList({ orderBy, page, pageSize });
    setTotalPageNum(Math.ceil(products.totalCount / pageSize));
    setItemList(products.list);
  };

  const toggleDropdownWrapper = () => {
    setDropdownToggle(!dropdownToggle);
  };

  const handleSortLoadList = (sortOption) => {
    setOrderBy(sortOption);
    setDropdownToggle(false);
  };

  const onChangePage = (pageNumber) => {
    setPage(pageNumber);
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };
    window.addEventListener("resize", handleResize);

    loadProductList({ orderBy, pageSize, page });
  }, [orderBy, pageSize, page]);

  return (
    <div className="allItemContainer">
      <div className="allItemSectionHeader">
        <h1 className="sectionTitle">전체 상품</h1>
        <div className="sectionHeaderRight">
          <div className="searchBox">
            <img className="searchIcon" src={searchIcon} alt="검색아이콘" />
            <input className="searchInput" placeholder="검색할 상품을 입력해주세요" />
          </div>
          <Link to="/additem" className="addItem">
            상품 등록하기
          </Link>
          <div className="dropdownContainer">
            <div className="sortButtonWrapper">
              <img className="dropdownIcon" onClick={toggleDropdownWrapper} src={dropdownIcon} alt="드롭다운아이콘" />
              <button className="showDropdownWrapperBtn">{orderBy === "recent" ? "최신순" : "베스트순"}</button>
            </div>
            {dropdownToggle && <SortSelect onSortSelection={handleSortLoadList} />}
          </div>
        </div>
      </div>
      <div className="allItemList">
        {itemList?.map((item) => (
          <ItemCard item={item} key={item.id} />
        ))}
      </div>
      <div className="paginationBar">
        <PaginationBar onChangePage={onChangePage} totalPageNum={totalPageNum} activePageNum={page} />
      </div>
    </div>
  );
}

export default AllItemSection;
