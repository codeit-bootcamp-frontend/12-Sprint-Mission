import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../../api/itemApi";
import ItemCard from "./ItemCard";
import PagenationBar from "../../../components/UI/PaginationBar";
import { ReactComponent as SortIcon } from "../../../assets/images/icons/ic_sort.svg";
import { ReactComponent as SearchIcon } from "../../../assets/images/icons/ic_search.svg";
import DropdownList from "../../../components/UI/DropdownList";

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

function AllItemsSection() {
  const [orderBy, setOderBy] = useState("recent");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(getPageSize());
  const [itemList, setItemList] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [totalPageNum, setTotalPageNum] = useState();

  //데이터 받아오기 및 정렬/페이지나누기
  const fetchSortedData = async ({ orderBy, page, pageSize }) => {
    const products = await getProducts({ orderBy, page, pageSize });
    setItemList(products.list);
    setTotalPageNum(Math.ceil(products.totalCount / pageSize));
  };

  //정렬&드롭다운
  const handleSortSelection = (sortOption) => {
    setOderBy(sortOption);
    setIsDropdownVisible(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

    //화면크기 변경시 페이지사이즈 다시 계산
    window.addEventListener("resize", handleResize);
    fetchSortedData({ orderBy, page, pageSize });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [orderBy, page, pageSize]);

  //토글 드롭다운 기본값
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  //전달받은 pageNumbber로 페이지 적용(setPage)
  const onPageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div>
      <div className="allItemsSectionHeader">
        <h1 className="sectionTitle">전체 상품</h1>
        <Link to="/additem" className="loginLink button">
          상품 등록하기
        </Link>
      </div>

      <div className="allItemsSectionHeader">
        <div className="searchBarWrapper">
          <SearchIcon />
          <input
            className="searchBarInput"
            placeholder="검색할 상품을 입력해주세요"
          />
        </div>
        <div className="sortButtonWrapper">
          <button
            className="sortDropdownTriggerButton"
            onClick={toggleDropdown}
          >
            <SortIcon />
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
        <PagenationBar
          totalPageNum={totalPageNum}
          activePageNum={page}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}

export default AllItemsSection;
