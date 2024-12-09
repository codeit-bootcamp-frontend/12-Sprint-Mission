import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";
import { getData } from "../../api";
import "../ProuductListPage/AllProductContainer.scss";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

function AllProductContainer() {
  const [itemList, setItemList] = useState();
  // eslint-disable-next-line
  const [pageSize, setPageSize] = useState(10);
  const [orderBy, setOrderBy] = useState("recent");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleBestClick = () => setOrderBy("favorite");
  const handleNewestClick = () => setOrderBy("recent");

  useEffect(() => {
    getData({ pageSize, orderBy, page: currentPage }).then((data) => {
      setItemList(data);
      setTotalPages(Math.ceil(data.totalCount / pageSize));
    });
  }, [pageSize, orderBy, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="navSearch">
        <h2>전체 상품</h2>
        <div className="navSearchBar">
          <input
            className="navSearch_input"
            placeholder="검색할 상품을 입력해주세요"
          ></input>
          <Link to="/additem">
            <button className="navSearch_Btn" type="button">
              상품 등록하기
            </button>
          </Link>
          <div>
            <select
              className="navSearch_choice"
              onChange={(e) => {
                const selectedValue = e.target.value;
                if (selectedValue === "최신순") handleNewestClick();
                if (selectedValue === "베스트순") handleBestClick();
              }}
            >
              <option value="최신순">최신순</option>
              <option value="베스트순">베스트순</option>
            </select>
          </div>
        </div>
      </div>
      <div className="product_list">
        {itemList?.list?.map((item, index) => (
          <ProductItem
            key={index}
            imageUrl={item.images[0]}
            title={item.name}
            price={item.price}
            likeCount={item.favoriteCount}
            size={221}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default AllProductContainer;
