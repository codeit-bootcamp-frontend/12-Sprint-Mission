import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { getProducts } from "../API";
import { Link } from "react-router-dom";
import SearchIcon from "../assets/search-icon.svg";
import SortIcon from "../assets/sort-icon.svg";
import DropdownList from "./DropDownList";
import PaginationBar from "./PaginationBar";

const MOBILE = 768;
const TABLET = 1280;
const ALL_ITEM_MOBILE = 4;
const ALL_ITEM_TABLET = 6;
const ALL_ITEM_DESKTOP = 10;

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < MOBILE) return ALL_ITEM_MOBILE;
  if (width < TABLET) return ALL_ITEM_TABLET;
  return ALL_ITEM_DESKTOP;
};

function AllItem() {
  const [orderBy, setOrderBy] = useState("recent"); // 데이터 정렬 기준 // 기본값 recent
  const [page, setPage] = useState(1); // 페이지 번호
  const [pageSize, setPageSize] = useState(getPageSize());
  const [itemList, setItemList] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // 드롭다운 메뉴 // 기본값 false(닫음)
  const [totalPageNum, setTotalPageNum] = useState(1);

  const fetchSortedData = async ({ orderBy, page, pageSize }) => {
    const products = await getProducts({ orderBy, page, pageSize });
    setItemList(products.list);
    setTotalPageNum(Math.ceil(products.totalCount / pageSize));
  };

  const handleSortSelection = (sortOption) => {
    setOrderBy(sortOption);
    setIsDropdownVisible(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

    window.addEventListener("resize", handleResize);
    fetchSortedData({ orderBy, page, pageSize });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [orderBy, page, pageSize]);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const onPageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div>
      <div className="allItemsSectionHeader">
        <h1 className="sectionTitle">전체 상품</h1>
        <Link to="/additem" className="itemRegister">
          상품 등록하기
        </Link>
      </div>

      <div className="allItemsSectionHeader">
        <div className="searchBarWrapper">
          <img src={SearchIcon} alt="돋보기" />
          <input
            className="searchBarInput"
            placeholder="검색할 상품을 입력해 주세요"
          />
        </div>
        <div className="sortButtonWrapper">
          <button
            className="sortDropdownTriggerButton"
            onClick={toggleDropdown}
          >
            <img src={SortIcon} alt="카테고리" />
          </button>
          {isDropdownVisible && (
            <DropdownList onSortSelection={handleSortSelection} />
          )}
        </div>
      </div>

      <div className="allItemsCardSection">
        {itemList?.map((item) => (
          <ItemCard item={item} key={`market-item-${item.id}`} />
        ))}
      </div>

      <div className="paginationBarWrapper">
        <PaginationBar
          totalPageNum={totalPageNum}
          activePageNum={page}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}

export default AllItem;
