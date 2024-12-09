import { useState, useEffect } from "react";
import { getData } from "../../api";
import ProductItem from "../common/product";
import SearchForm from "../SearchForm/SearchForm";
import Pagination from "../Pagination/Pagination";
import "./AllProducts.css";
import useDevice from "../../hooks/useDevice";

function AllProducts() {
  const [allItemList, setAllItemList] = useState([]);
  const [selectedOption, setSelectedOption] = useState("recent");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [size, setSize] = useState(282);

  const { mode } = useDevice();

  useEffect(() => {
    const fetchAllItems = async () => {
      let pageSize = 10;
      if (mode === "tablet") {
        pageSize = 6;
        setSize(221);
      } else if (mode === "mobile") {
        pageSize = 4;
        setSize(168);
      } else {
        setSize(221);
      }
      const data = await getData({
        page: currentPage,
        pageSize: pageSize,
        orderBy: selectedOption,
      });

      setAllItemList(data.list);
      setTotalPages(Math.ceil(data.totalCount / 10));
    };

    fetchAllItems();
  }, [currentPage, selectedOption, mode]);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  return (
    <section className="all-item-section">
      <div className="all-item-header">
        <h2>전체 상품</h2>
        <SearchForm
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
      <ul className={`all-product-list ${mode}`}>
        {allItemList.map((item) => (
          <li key={item.id}>
            <ProductItem
              imageUrl={item.images[0]}
              name={item.name}
              price={item.price}
              likeCount={item.favoriteCount}
              size={size}
            />
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  );
}

export default AllProducts;
