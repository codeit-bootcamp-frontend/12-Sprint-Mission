import { useEffect } from "react";
import { useState } from "react";
import { getProduct } from "../../../api/ItemApi";
import ItemCard from "./ItemCard";
import searchIcon from "../../../images/ic_search.png";
import dropdownIcon from "../../../images/ic_arrow_down.png";
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

function AllItemSection() {
  const [itemList, setItemList] = useState([]);
  const [orderBy, setOrderBy] = useState("recent");
  const [pageSize, setPageSize] = useState(getPageSize());
  const [dropdownToggle, setDropdownToggle] = useState(false);

  const loadProductList = async ({ orderBy, page, pageSize }) => {
    const products = await getProduct({ orderBy, pageSize });
    setItemList(products.list);
  };

  const toggleDropdownWrapper = () => {
    setDropdownToggle(!dropdownToggle);
  };

  const handleSortLoadList = (sortOption) => {
    setOrderBy(sortOption);
    setDropdownToggle(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };
    window.addEventListener("resize", handleResize);

    loadProductList({ orderBy, pageSize });
  }, [orderBy, pageSize]);

  return (
    <div className="allItemContainer">
      <div className="allItemSectionHeader">
        <h1 className="sectionTitle">전체 상품</h1>
        <div className="sectionHeaderRight">
          <div className="searchBox">
            <img className="searchIcon" src={searchIcon} alt="검색아이콘" />
            <input className="searchInput" placeholder="검색할 상품을 입력해주세요" />
          </div>
          <button className="addItem">상품 등록하기</button>
          <div className="dropdownContainer">
            <div className="sortButtonWrapper">
              <img className="dropdownIcon" onClick={toggleDropdownWrapper} src={dropdownIcon} alt="드롭다운아이콘" />
              <button className="showDropdownWrapperBtn">{orderBy === "recent" ? "최신순" : "베스트순"}</button>
            </div>
            {dropdownToggle && <DropdownList onSortSelection={handleSortLoadList} />}
          </div>
        </div>
      </div>
      <div className="allItemList">
        {itemList?.map((item) => (
          <ItemCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default AllItemSection;
