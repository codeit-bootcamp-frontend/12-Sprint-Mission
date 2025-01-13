import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../section/Footer";
import Header from "../section/Header";
import ProductBestList from "../ProductBestList";
import ProductList from "../ProductList";
import Pagination from "../Pagination";
import ProductSearch from "../ProductSearch";
import { Link } from "react-router-dom";

export default function ProductListPage() {

  //상품 목록 상태 관리
  const [items, setItems] = useState([]);

  //최신순, 좋아요순 토글 상태 관리
  const [selectView, setSelectView] = useState(false);

  //최신순, 좋아요순 상태 관리
  const [sortOrder, setSortOrder] = useState('최신순');

  //최신순, 좋아요순 상태 변경 함수
  function handleSortChange(newSortOrder) {
    setSortOrder(newSortOrder);
    setSelectView(!selectView);
  }

  //최신순, 좋아요순 토글 상태 변경 함수
  function toggleSelect(e) {
    e.preventDefault();
    setSelectView(!selectView);
  };

  //최신순, 좋아요순 정렬 함수
  function sortedItems() {
    if (sortOrder === '최신순') {
      return [...items].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sortOrder === '좋아요순') {
      return [...items].sort((a, b) => b.favoriteCount - a.favoriteCount);
    }
  }

  //페이지네이션 상태 관리
  const [totalPage, setTotalPage] = useState(0); //전체페이지
  const [page, setPage] = useState(1); //현재페이지
  const itemsPerPage = 10; //한 페이지 상품 수 

  //검색 상태 관리
  const [productSearch, setProductSearch] = useState('');

  //검색 상태 변경 함수
  function getProductData(e) {
    setProductSearch(e.target.value);
  };

  //검색어 필터 변수
  const filterItems = items.filter((items) =>
    items.name.toLowerCase().includes(productSearch.toLowerCase())
  );

  useEffect(() => {

    async function allItem() {

      try {

        const response = await axios.get('https://panda-market-api.vercel.app/products', {
          params: {
            page: page, // 현재 페이지에 해당하는 데이터 요청
            limit: itemsPerPage, // 한 페이지당 데이터 수
          }
        });
        setItems(response.data.list);
        setTotalPage(Math.ceil(response.data.totalCount / itemsPerPage));

      } catch (error) {

        console.log('error :', error);

      }
    }

    allItem();

  }, [page])

  return (
    <>
      <Header />
      <main id="sub">
        <div className="contentBox">
          <div className="productListBox">
            <div className="productBox">
              <div className="container">
                <div className="product">
                  <h3>
                    베스트 상품
                  </h3>
                  <ProductBestList />
                </div>
              </div>
            </div>

            <div className="productBox">
              <div className="container">
                <div className="product">
                  <h3>
                    전체 상품
                  </h3>
                  <div className="searchWrap">
                    <ProductSearch
                      productSearch={productSearch}
                      getProductData={getProductData}
                    />

                    <div className="btnBox">
                      <Link to={'/additem'} className="addBtn">
                        상품 등록하기
                      </Link>
                    </div>

                    <div className="selectBox">
                      <Link
                        className={`select ${selectView ? "active" : ""}`}
                        onClick={toggleSelect}
                      >
                        {sortOrder}
                      </Link>
                      <ul className="viewList">
                        <li>
                          <Link
                            to="#"
                            onClick={() => handleSortChange('최신순')}
                          >
                            최신순
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => handleSortChange('좋아요순')}
                          >
                            좋아요순
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {
                    filterItems.length === 0 ? (
                      <p>
                        검색된 상품이 없습니다.
                      </p>
                    ) : (
                      <ProductList
                        filterItems={filterItems}
                        sortedItems={sortedItems}
                      />
                    )
                  }

                </div>
              </div>
            </div>

            <Pagination
              currentPage={page}
              totalPage={totalPage}
              setPage={setPage}
            />

          </div>
        </div>
      </main >

      <Footer />
    </>
  )

}