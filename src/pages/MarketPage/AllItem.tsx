import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { getProducts } from "../../api/itemApi";
import { Link } from "react-router-dom";
import SearchIcon from "../../assets/icons/ic-search.svg";
import SortIcon from "../../assets/icons/ic-sort.svg";
import DropdownList from "./DropDownList";
import PaginationBar from "./PaginationBar";
import {
  Product,
  ProductListResponse,
  ProductSortOption,
} from "../../types/productTypes";

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

const AllItem: React.FC = () => {
  const [orderBy, setOrderBy] = useState<ProductSortOption>("recent"); // 데이터 정렬 기준 // 기본값 recent
  const [page, setPage] = useState(1); // 페이지 번호
  const [pageSize, setPageSize] = useState(getPageSize());
  const [itemList, setItemList] = useState<Product[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // 드롭다운 메뉴 // 기본값 false(닫음)
  const [totalPageNum, setTotalPageNum] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const fetchSortedData = async ({
    orderBy,
    page,
    pageSize,
  }: {
    orderBy: ProductSortOption;
    page: number;
    pageSize: number;
  }) => {
    setIsLoading(true);
    try {
      const products: ProductListResponse = await getProducts({
        orderBy,
        page,
        pageSize,
      });
      setItemList(products.list);
      setTotalPageNum(Math.ceil(products.totalCount / pageSize));
    } catch (error) {
      console.error("오류: ", (error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSortSelection = (sortOption: ProductSortOption) => {
    setOrderBy(sortOption);
    // setIsDropdownVisible(false);
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

  const onPageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
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
};

export default AllItem;
