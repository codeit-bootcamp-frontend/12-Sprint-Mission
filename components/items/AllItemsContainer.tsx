import { useState, useEffect, ChangeEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/items/productList.module.css";
import ArrowDownImg from "@/public/assets/images/items/select_down.svg";
import productSearchImg from "@/public/assets/images/items/pd_search.png";
import { getProductData } from "@/api/api";
import calculatorMediaQuery from "../../utils/calculatormediaQuery";
import { ApiOptions, SearchForm } from "./types";

function AllItemsContainer({
  setProductContainer,
  page,
  setPage,
  setPageCount,
  setIsDataCount,
  setLoading,
}: SearchForm) {
  const { isTablet, isMobile } = calculatorMediaQuery();
  const [isResponsive, setIsResponsive] = useState(0);
  const [isItemCount, setIsItemCount] = useState(
    isMobile ? 4 : isTablet ? 6 : 10
  );

  const [orderBy, setOrderBy] = useState("recent");
  const [keyword, setKeyword] = useState("");
  const [filter, setFilter] = useState("최신순");
  const [toggle, setToggle] = useState(true);

  // 첫 렌더링 시 현재 유저의 디바이스 크기를 계산해 페이지네이션 출력
  useEffect(() => {
    setIsDataCount(isItemCount);
  }, [isItemCount, setIsDataCount]);

  const handleFilterToggle = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const handleNewsetClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const filterText = (e?.target as HTMLLIElement).textContent!;
    setFilter(filterText);
    setToggle(true);
    setOrderBy("recent");
    setPage(1);
  };

  const handleBestClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const filterText = (e?.target as HTMLLIElement).textContent!;
    setFilter(filterText);
    setToggle(true);
    setOrderBy("favorite");
    setPage(1);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth);
      isMobile
        ? setIsItemCount(4)
        : isTablet
        ? setIsItemCount(6)
        : setIsItemCount(10);
      setIsDataCount(isItemCount);
      // 페이지 창 크기 조절 시 pagination 1로 초기화(추후 불필요하단 판단 시 아래 코드만 삭제)
      setPage(1);
    };
    
    window.addEventListener("resize", handleResize);
    return () => {
      // cleanup
      window.removeEventListener("resize", handleResize);
    };
  }, [isItemCount, isResponsive, isMobile, isTablet, setIsDataCount, setPage]);

  useEffect(() => {
    const handleLoad = async (options: ApiOptions) => {
      try {
        const { list, totalCount } = await getProductData(options);
        setProductContainer(list);
        setPageCount(totalCount);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    handleLoad({
      page,
      orderBy,
      pageSize: isItemCount,
      keyword: keyword,
    });
  }, [
    orderBy,
    keyword,
    page,
    isItemCount,
    setLoading,
    setPageCount,
    setProductContainer,
  ]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setKeyword(e.target.value);
    setPage(1);
  };
  return (
    <>
      <div className={styles.filterCover}>
        <p className={styles.listTitle}>전체 상품</p>
        <div className={styles.searchContainer}>
          <form>
            <div className={styles.formCover}>
              <div className={styles.inputBox}>
                <Image src={productSearchImg} alt="상품검색" />
                <input
                  name="search"
                  placeholder="검색할 상품을 입력해주세요"
                  onChange={handleSearch}
                />
              </div>
              <Link href="/items/additem" prefetch={true}>
                <button type="button">상품 등록하기</button>
              </Link>
            </div>
          </form>
          <div className={styles.selectBox}>
            <div className={styles.btnSelectBox} onClick={handleFilterToggle}>
              <p className={styles.text}>{filter}</p>
              <ArrowDownImg className={`${!toggle && styles.on}`} />
            </div>
            <ul className={`${styles.btnChoose} ${!toggle && styles.active}`}>
              <li onClick={handleNewsetClick}>최신순</li>
              <li onClick={handleBestClick}>좋아요순</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllItemsContainer;
