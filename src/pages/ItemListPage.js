import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getItems } from "../api/api";
import styled from "styled-components";
import ContentWrap from "../components/ContentWrap";
import BestList from "../components/BestList";
import useWindowSize from "../utils/useWindowSize";
import TotalList from "../components/TotalList";
import Sort from "../components/Sort";
import Pagination from "../components/Pagination";
import SectionTitle from "../components/SectionTitle";
import Search from "../components/Search";

const TotalProductTop = styled.div`
  display: grid;
  grid-template: "title search button sort";
  grid-template-columns: 1fr;
  align-items: center;
  gap: 10px;
  @media (max-width: 767px) {
    grid-template:
      "title button"
      "search sort";
    grid-template-columns: 1fr;
  }
`;

const AddItem = styled.button`
  grid-area: button;
  width: 133px;
  height: 42px;
  border-radius: 8px;
  background-color: var(--primary-color-100);
  font-size: 16px;
  text-align: center;
  font-weight: var(--font-weight-semibold);
  color: var(--gray-scale-0);
  align-content: center;
  &:hover {
    background-color: var(--primary-color-200);
  }
  &:active {
    background-color: var(--primary-color-300);
  }
`;

function Items() {
  const [order, setOrder] = useState("recent");
  const [items, setItems] = useState([]);

  const { width } = useWindowSize();
  const initialPageSize = width >= 1200 ? 4 : width >= 768 ? 2 : 1;
  const initialFullPageSize = width >= 1200 ? 10 : width >= 768 ? 6 : 4;
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [fullPageSize, setFullPageSize] = useState(initialFullPageSize);

  const [fullPage, setFullPage] = useState(1);
  const [fullItems, setFullItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const [keyword, setKeyword] = useState("");

  const handleKeywordSubmit = (e) => {
    e.preventDefault();
    const searchKeyword = e.target["keyword"].value.trim();
    if (searchKeyword) {
      setKeyword(searchKeyword);
    }
  };

  const handleLoad = async () => {
    const options = { orderBy: "favorite", pageSize: pageSize };
    const { list } = await getItems(options);
    setItems(list);
  };

  const handleLoadFull = async (options) => {
    const fullOptions = {
      orderBy: order,
      pageSize: fullPageSize,
      keyword: keyword,
      page: fullPage,
    };
    const { list, totalCount } = await getItems(fullOptions);
    setFullItems(list);
    setTotalCount(totalCount);
  };

  useEffect(() => {
    handleLoad();
  }, [pageSize]);

  useEffect(() => {
    if (width >= 1200) {
      setFullPageSize(10);
      setPageSize(4);
    } else if (width >= 768) {
      setFullPageSize(6);
      setPageSize(2);
    } else {
      setFullPageSize(4);
      setPageSize(1);
    }
  }, [width]);

  useEffect(() => {
    handleLoadFull();
  }, [fullPage, order, keyword, fullPageSize]);

  useEffect(() => {
    if (keyword) {
      handleLoadFull(order, keyword);
    }
  }, [keyword, order]);

  return (
    <ContentWrap>
      <BestList items={items} />
      <article className="total-product">
        <TotalProductTop>
          <SectionTitle>전체 상품</SectionTitle>
          <Search handleKeywordSubmit={handleKeywordSubmit} />
          <AddItem>
            <Link to="/additem">상품 등록하기</Link>
          </AddItem>
          <Sort setOrder={setOrder} width={width} />
        </TotalProductTop>
        <TotalList
          fullItems={fullItems}
          fullPage={fullPage}
          fullPageSize={fullPageSize}
          setFullPage={setFullPage}
          totalCount={totalCount}
        ></TotalList>
        <Pagination
          fullPage={fullPage}
          fullPageSize={fullPageSize}
          setFullPage={setFullPage}
          totalCount={totalCount}
        />
      </article>
    </ContentWrap>
  );
}

export default Items;
