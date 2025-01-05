import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "@/api/itemApi";
import defaultImage from "@/assets/images/image/img_default.png";
import HeartIcon from "@/assets/images/icons/ic_heart.svg?react";
import SearchIcon from "@/assets/images/icons/ic_search.svg?react";
import ArrowDownIcon from "@/assets/images/icons/ic_arrow_down.svg?react";
import DropdownList from "@/components/UI/DropdownList";
import PaginationBar from "@/components/UI/PaginationBar";

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    return 4;
  } else if (width < 1200) {
    return 6;
  } else {
    return 10;
  }
};

function AllItemsSection() {
  const [itemList, setItemList] = useState<
    Array<{
      id: number;
      images: string[];
      name: string;
      price: number;
      favoriteCount: number;
    }>
  >([]);

  const [pageSize, setPageSize] = useState(getPageSize());
  const [orderBy, setOrderBy] = useState("recent");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPageNum, setTotalPageNum] = useState(0);

  const fetchSortedItems = async ({
    orderBy,
    page,
    pageSize,
  }: {
    orderBy: string;
    page: number;
    pageSize: number;
  }) => {
    const products = await getProducts({ orderBy, page, pageSize });
    setItemList(products.list);
    setTotalPageNum(Math.ceil(products.totalCount / pageSize));
  };

  const handleSortSelection = (sortOption: string) => {
    setOrderBy(sortOption);
    setIsDropdownVisible(false);
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const onPageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

    window.addEventListener("resize", handleResize);
    fetchSortedItems({ orderBy, page, pageSize });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [orderBy, page, pageSize]);

  return (
    <div className="allItemsContainer">
      <div className="allItemsSectionHeader">
        <h2 className="sectionTitle">전체 상품</h2>
        <div className="allItemsSectionHeaderRight">
          <div className="searchBarWrapper">
            <SearchIcon />
            <input
              className="searchBarInput"
              placeholder="검색할 상품을 입력해주세요"
            />
          </div>
          <Link to="/additem" className="addItemLinkButton button">
            상품 등록하기
          </Link>
          <div className="sortButtonWrapper">
            <button
              className="sortDropdownArrowDownButton"
              onClick={toggleDropdown}
            >
              <span>{orderBy === "recent" ? "최신순" : "좋아요순"}</span>
              <ArrowDownIcon />
            </button>
            {isDropdownVisible && (
              <DropdownList onSortSelection={handleSortSelection} />
            )}
          </div>
        </div>
      </div>

      <div className="allItemsCardSection">
        {itemList?.map((item) => (
          <Link to={`/items/${item.id}`} key={item.id} className="itemCard">
            <img
              src={
                item.images && item.images.length > 0
                  ? item.images[0]
                  : defaultImage
              }
              alt={item.name}
              className="itemImage"
              onError={(e) =>
                ((e.target as HTMLImageElement).src = defaultImage)
              }
            />
            <h3 className="itemName">{item.name}</h3>
            <p className="itemPrice">{item.price.toLocaleString()}원</p>
            <div className="favoriteCount">
              <HeartIcon />
              {item.favoriteCount}
            </div>
          </Link>
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

export default AllItemsSection;
