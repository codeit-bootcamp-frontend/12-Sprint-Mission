import { useState, useEffect, FormEvent } from "react";
import { Link } from "react-router-dom";
import { getItems, Item } from "../api/api";
import styled from "styled-components";
import useWindowSize from "../utils/useWindowSize";
import ContentWrap from "../components/ContentWrap";
import Sort from "../components/Sort";
import SectionTitle from "../components/SectionTitle";
import Search from "../components/Search";
import BestList from "../components/BestList";
import TotalList from "../components/TotalList";
import Pagination from "../components/Pagination";

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

// type 설정
type SortOrder = "recent" | "favorite";

function Items() {
  const [order, setOrder] = useState<SortOrder>("recent");
  const [bestItems, setBestItems] = useState<Item[]>([]);
  const [bestPageSize, setBestPageSize] = useState(4);
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<Item[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [keyword, setKeyword] = useState("");

  const { width } = useWindowSize();

  const handleKeywordSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchKeyword = (e.target as HTMLFormElement)["keyword"].value.trim();
    if (searchKeyword) {
      setKeyword(searchKeyword);
      setPage(1);
    }
  };

  // 베스트 상품
  const handleLoad = async () => {
    const options = { orderBy: "favorite", pageSize: bestPageSize };
    const { list } = await getItems(options);
    setBestItems(list);
  };

  // 전체 상품
  const handleLoadFull = async () => {
    const fullOptions = {
      orderBy: order,
      pageSize: pageSize,
      keyword: keyword,
      page: page,
    };
    const { list, totalCount } = await getItems(fullOptions);
    setItems(list);
    setTotalCount(totalCount);
  };

  // 화면 크기에 따른 페이지 당 아이템 개수 설정
  useEffect(() => {
    if (width >= 1200) {
      setPageSize(10);
      setBestPageSize(4);
    } else if (width >= 768) {
      setPageSize(6);
      setBestPageSize(2);
    } else {
      setPageSize(4);
      setBestPageSize(1);
    }
  }, [width]);

  // 베스트 상품
  useEffect(() => {
    handleLoad();
  }, [bestPageSize]);

  // 전체 상품
  useEffect(() => {
    handleLoadFull();
  }, [page, order, keyword, pageSize]);

  return (
    <ContentWrap>
      <BestList items={bestItems} setPageSize={setBestPageSize} />
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
          items={items}
          page={page}
          pageSize={pageSize}
          setPage={setPage}
          totalCount={totalCount}
        ></TotalList>
        <Pagination
          page={page}
          pageSize={pageSize}
          setPage={setPage}
          totalCount={totalCount}
        />
      </article>
    </ContentWrap>
  );
}

export default Items;
