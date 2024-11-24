import { useState, useEffect } from "react";
import { getData } from "../../api";
import ProductItem from "../common/product";
import SearchForm from "../SearchForm/SearchForm";
import Pagination from "../Pagination/Pagination";
import "./AllProducts.css";

function AllProducts() {
  const [allItemList, setAllItemList] = useState([]);
  const [selectedOption, setSelectedOption] = useState("recent");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchAllItems = async () => {
      const data = await getData({
        page: currentPage,
        pageSize: 10,
        orderBy: selectedOption,
      });

      setAllItemList(data.list);
      setTotalPages(Math.ceil(data.totalCount / 10));
    };

    fetchAllItems();
  }, [currentPage, selectedOption]);

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
      <ul className="all-product-list">
        {allItemList.map((item) => (
          <li key={item.id}>
            <ProductItem
              imageUrl={item.images[0]}
              name={item.name}
              price={item.price}
              likeCount={item.favoriteCount}
              size={221}
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
