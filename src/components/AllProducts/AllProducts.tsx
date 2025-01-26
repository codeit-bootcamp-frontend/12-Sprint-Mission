import { useState, useEffect } from "react";
import { getData, OrderByType, Product } from "../../api";
import ProductItem from "../common/product";
import SearchForm from "../SearchForm/SearchForm";
import Pagination from "../Pagination/Pagination";
import "./AllProducts.css";
import useDevice from "../../hooks/useDevice";
import { Link } from "react-router-dom";

function AllProducts() {
  const [allItemList, setAllItemList] = useState<Product[]>([]);
  const [selectedOption, setSelectedOption] = useState<OrderByType>("recent");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [size, setSize] = useState<number>(282);

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

  const handlePageChange = (pageNumber: number) => {
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
        {allItemList.map(
          ({ id, images, name, price, favoriteCount }: Product) => (
            <li key={id}>
              <ProductItem
                id={id}
                imageUrl={images[0]}
                name={name}
                price={price}
                likeCount={favoriteCount}
                size={size}
              />
            </li>
          )
        )}
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
