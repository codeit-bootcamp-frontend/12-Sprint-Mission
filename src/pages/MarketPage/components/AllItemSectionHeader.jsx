import styles from "./AllItemSectionHeader.module.css";
import dropdownIcon from "../../../assets/images/ic_arrow_down.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import SortSelect from "../../../components/UI/onSortSelect";
import Icon from "../../../components/Icon/Icon";
import LinkButton from "../../../components/Button/LinkButton.jsx";

const AllItemSectionHeader = () => {
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const [orderBy, setOrderBy] = useState("recent");

  const toggleDropdownWrapper = () => {
    setDropdownToggle(!dropdownToggle);
  };

  const handleSortLoadList = (sortOption) => {
    setOrderBy(sortOption);
    setDropdownToggle(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>전체 상품</h1>
      <div className={styles.options}>
        <div className={styles["search-bar"]}>
          <Icon
            name="search"
            size="24"
            color="#9CA3AF"
            className={styles["search-icon"]}
          />
          <input
            className={styles.input}
            placeholder="검색할 상품을 입력해주세요"
          />
        </div>
        <Link to="/additem">
          <LinkButton className={styles.link}>상품 등록하기</LinkButton>
        </Link>
        <div className={styles.dropdown}>
          <div className={styles["sort-wrapper"]}>
            <button className="showDropdownWrapperBtn">
              {orderBy === "recent" ? "최신순" : "좋아요순"}
            </button>
            <Icon
              name="dropdown"
              size="24"
              color="black"
              className={styles["dropdown-icon"]}
              onClick={toggleDropdownWrapper}
            />
          </div>
          {dropdownToggle && (
            <SortSelect onSortSelection={handleSortLoadList} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AllItemSectionHeader;
