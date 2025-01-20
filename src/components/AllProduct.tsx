import { useMediaQuery } from "react-responsive";
import getProduct from "./api";
import Paging from "./Paging";
import ProductItem from "./ProductItem";
import { useRef, useState, useEffect } from "react";
import SubTitle from "./SubTitle";
import "./AllProduct.css";
import selectIcon from "./../assets/icon_select.svg";
import { Link } from "react-router-dom";
import useOutSideClick from "../hooks/useOutSideClick";
import Product from "../types/Product";
import { OrderQuery, OrderKorQuery } from "../types/Query";

interface Props {
  col: number;
}

type PageSizeQuery = number;
type KeywordQuery = string;
type PageQuery = number;

const AllProduct = ({ col }: Props) => {
  const isTablet = useMediaQuery({
    query: "(max-width: 1200px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const [items, setItems] = useState<Product[]>([]);
  const [order, setOrder] = useState<OrderQuery>("recent");
  const [keyword, setKeyword] = useState("");
  const [orderName, setOrderName] = useState("최신순");
  const [pageSize, setPageSize] = useState(isMobile ? 4 : isTablet ? 6 : 10);
  // 페이지네이션 관련 상태 추가
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호
  const [totalItems, setTotalItems] = useState(0); // 전체 아이템 수

  useEffect(() => {
    setPageSize(isMobile ? 4 : isTablet ? 6 : 10);
    setCurrentPage(1);
  }, [isMobile, isTablet]);

  const handleLoad = async (orderQuery: OrderQuery, pageSizeQuery: PageSizeQuery, keywordQuery: KeywordQuery, pageQuery: PageQuery): Promise<void> => {
    const { list, totalCount } = await getProduct({ order: orderQuery, pageSize: pageSizeQuery, keyword: keywordQuery, page: pageQuery });
    setItems(list);
    setTotalItems(totalCount);
  };

  useEffect(() => {
    handleLoad(order, pageSize, keyword, currentPage);
  }, [order, pageSize, keyword, currentPage]);

  const handleOrderChange = (newOrder: OrderQuery, newOrderName: OrderKorQuery) => {
    setOrder(newOrder);
    setOrderName(newOrderName);
    setCurrentPage(1);
  };

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    setCurrentPage(1);
  };

  const selectRef = useRef<HTMLDivElement | null>(null);

  useOutSideClick(selectRef, () => {
    if (selectRef.current) {
      selectRef.current?.classList.remove("active");
    }
  });

  const handleSelect = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    e.currentTarget.classList.toggle("active");
  };

  return (
    <>
      <h2 className="tit_box">
        <SubTitle name="전체 상품" />
        <div className="product_search">
          <input className="inp_reset" type="text" placeholder="검색할 상품을 입력해주세요" onChange={handleKeywordChange} />
        </div>
        <div className="product_add_btn">
          <Link to="/additem" className="btn_blue">
            상품 등록하기
          </Link>
        </div>
        <div className="product_sort">
          <div className="select_common" onClick={handleSelect} ref={selectRef} data-menu="button">
            <p>{isMobile ? <img src={selectIcon} alt="상품정렬" /> : orderName}</p>
            <div className="select_list">
              <ul>
                <li onClick={() => handleOrderChange("recent", "최신순")}>최신순</li>
                <li onClick={() => handleOrderChange("favorite", "좋아요순")}>좋아요순</li>
              </ul>
            </div>
          </div>
        </div>
      </h2>
      <div className="product_list_box">
        <ul className={`product_list col${col}`}>
          {items.map((item) => {
            return (
              <li key={item.id}>
                <ProductItem item={item} />
              </li>
            );
          })}
        </ul>
      </div>
      <Paging totalItems={totalItems} itemsPerPage={pageSize} currentPage={currentPage} onPageChange={(page: number) => setCurrentPage(page)} />
    </>
  );
};

export default AllProduct;
