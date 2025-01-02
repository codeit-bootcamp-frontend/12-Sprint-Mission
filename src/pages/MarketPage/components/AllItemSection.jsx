import { useEffect } from "react";
import { useState } from "react";
import { getProductList } from "../../../api/ItemApi";
import ItemCard from "../../../components/ItemCard/ItemCard.jsx";
import PaginationBar from "../../../components/Pagination/PaginationBar.jsx";
import AllItemSectionHeader from "./AllItemSectionHeader.jsx";

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

  const [pageSize, setPageSize] = useState(getPageSize());
  const [page, setPage] = useState(1);

  const [totalPageNum, setTotalPageNum] = useState();

  const loadProductList = async ({ orderBy, page, pageSize }) => {
    const products = await getProductList({ orderBy, page, pageSize });
    setTotalPageNum(Math.ceil(products.totalCount / pageSize));
    setItemList(products.list);
  };

  const onChangePage = (pageNumber) => {
    setPage(pageNumber);
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };
    window.addEventListener("resize", handleResize);

    loadProductList({ pageSize, page });
  }, [pageSize, page]);

  return (
    <div className="allItemContainer">
      <AllItemSectionHeader />
      <div className="allItemList">
        {itemList?.map((item) => (
          <ItemCard item={item} key={item.id} />
        ))}
      </div>
      <div className="paginationBar">
        <PaginationBar
          onChangePage={onChangePage}
          totalPageNum={totalPageNum}
          activePageNum={page}
        />
      </div>
    </div>
  );
}

export default AllItemSection;
