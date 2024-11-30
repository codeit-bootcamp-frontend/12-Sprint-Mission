import { useState, useEffect, useRef } from "react";
import "./app.css";
import Nav from "./Nav";
import ContentWrap from "./ContentWrap";
import "./BestList.css";
import { getItems } from "../api";
import BestList from "./BestList";
import TotalListItem from "./TotalList";

function App() {
  const [order, setOrder] = useState("recent");
  const [page, setPage] = useState(4);
  const [items, setItems] = useState([]);

  const [totalCount, setTotalCount] = useState(0);
  const pageRange = 10;
  const btnRange = 5;
  const [fullPage, setFullPage] = useState(1);
  const [fullItems, setFullItems] = useState([]);
  const currentSet = Math.ceil(fullPage / btnRange);
  const startPage = (currentSet - 1) * btnRange + 1;
  const totalPage = Math.ceil(totalCount / pageRange);
  const endPage = Math.min(startPage + btnRange - 1, totalPage);

  const selectRef = useRef(null);
  const [currentValue, setCurrentValue] = useState("최신순");
  const [showOptions, setShowOptions] = useState(false);

  const [keyword, setKeyword] = useState("");

  const handleKeywordSubmit = (e) => {
    e.preventDefault();
    const searchKeyword = e.target["keyword"].value.trim();
    setKeyword(searchKeyword);
    handleLoadFull(order, searchKeyword);
  };

  const handleOnChangeSelectValue = (e) => {
    const sortValue = e.target.getAttribute("value");
    const sortName = e.target.getAttribute("name");
    setCurrentValue(sortName);
    setOrder(sortValue);
  };

  const handleLoad = async () => {
    const options = { orderBy: "favorite", pageSize: page };
    const { list } = await getItems(options);
    setItems(list);
  };

  const handleLoadFull = async (options) => {
    const fullOptions = {
      orderBy: order,
      pageSize: pageRange,
      keyword: keyword,
      offset: (fullPage - 1) * pageRange,
      limit: pageRange,
      page: fullPage,
    };
    const { list, totalCount } = await getItems(fullOptions);
    setFullItems(list);
    setTotalCount(totalCount);
  };

  useEffect(() => {
    handleLoad();
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [order, selectRef]);

  useEffect(() => {
    handleLoadFull();
  }, [fullPage, order, keyword]);

  return (
    <>
      <Nav />
      <ContentWrap>
        <BestList items={items} />
        <article className="total-product">
          <div className="total-product-top">
            <p className="section-title">전체 상품</p>
            <form onSubmit={handleKeywordSubmit}>
              <input
                type="search"
                name="keyword"
                className="input-search"
                placeholder="검색할 상품을 입력해주세요"
              />
            </form>
            <a href="./additem.html" className="btn-register">
              상품 등록하기
            </a>
            <div
              className="sort"
              onClick={() => {
                setShowOptions(!showOptions);
              }}
              ref={selectRef}
            >
              <label className="btn-sort">{currentValue}</label>
              {showOptions && (
                <ul class="sort-list">
                  <li
                    class="latest"
                    value="recent"
                    name="최신순"
                    onClick={handleOnChangeSelectValue}
                  >
                    최신순
                  </li>
                  <li
                    class="order-like"
                    value="favorite"
                    name="좋아요순"
                    onClick={handleOnChangeSelectValue}
                  >
                    좋아요순
                  </li>
                </ul>
              )}
            </div>
          </div>
          <ul className="product-list-wrap">
            {fullItems.map((fullItem) => {
              return (
                <li className="product-list total" key={fullItem.id}>
                  <TotalListItem item={fullItem} />
                </li>
              );
            })}
          </ul>
          <ol className="pagination">
            {currentSet > 1 && (
              <li className="btn-prev">
                <a onClick={() => setFullPage(startPage - 1)}></a>
              </li>
            )}
            {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
              <li key={i}>
                <a
                  onClick={() => setFullPage(startPage + i)}
                  className={fullPage === startPage + i ? "active" : ""}
                >
                  {startPage + i}
                </a>
              </li>
            ))}
            {currentSet < Math.ceil(totalPage / btnRange) && (
              <li className="btn-next">
                <a onClick={() => setFullPage(endPage + 1)}></a>
              </li>
            )}
          </ol>
        </article>
      </ContentWrap>
    </>
  );
}

export default App;
