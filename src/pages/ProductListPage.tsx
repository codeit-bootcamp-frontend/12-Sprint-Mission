import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/section/Footer";
import Header from "../components/section/Header";
import ProductBestList from "../components/ProductBestList";
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";
import ProductSearch from "../components/ProductSearch";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import style from './ProductListPage.module.css'
import CustomSelect from "../components/CustomSelect";

export default function ProductListPage() {
  
  interface ProductListProps {
    id: number;
    name: string;
    description: string;
    price: number;
    images: string;
    favoriteCount: number;
  }

  //상품 목록 상태 관리
  const [items, setItems] = useState<ProductListProps[]>([]);

  //페이지네이션 상태 관리
  const [totalPage, setTotalPage] = useState(0); //전체페이지
  const [page, setPage] = useState(1); //현재페이지
  const itemsPerPage = 10; //한 페이지 상품 수 

  //최신순, 좋아요순 토글 상태 관리
  const [selectView, setSelectView] = useState(false);

  //최신순, 좋아요순 상태 관리
  const [sortOrder, setSortOrder] = useState('recent');

  // UI에 표시할 정렬 기준 관리 (최신순, 좋아요순)
  const [displaySortOrder, setDisplaySortOrder] = useState('최신순');

  //최신순, 좋아요순 상태 변경 함수
  function handleSortChange(newSortOrder:string) {
    setSortOrder(newSortOrder);

    if (newSortOrder === 'recent') {
      setDisplaySortOrder('최신순');
    } else if (newSortOrder === 'favorite') {
      setDisplaySortOrder('좋아요순');
    }

    setPage(1);
    setSelectView(!selectView);
  }

  //최신순, 좋아요순 토글 상태 변경 함수
  function toggleSelect(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    setSelectView(!selectView);
  };

  //검색 상태 관리
  const [productSearch, setProductSearch] = useState('');

  //검색 상태 변경 함수
  function getProductData(e: React.ChangeEvent<HTMLInputElement>) {
    setProductSearch(e.target.value);
  };

  //검색어 필터 변수
  const filterItems = items.filter((items) =>
    items.name.toLowerCase().includes(productSearch.toLowerCase())
  );

  //데이터 불러오기
  async function getAllItem() {

    try {

      const response = await axios.get(`https://panda-market-api.vercel.app/products?page=${page}&limit=${itemsPerPage}&orderBy=${sortOrder}`);
      setItems(response.data.list);
      setTotalPage(Math.ceil(response.data.totalCount / itemsPerPage));

    } catch (error) {

      console.log('error :', error);

    }
  }

  useEffect(() => {
    getAllItem();
  }, [page, sortOrder]); // 페이지나 정렬 값이 바뀔 때마다 데이터를 새로 가져옵니다.

  return (
    <>
      <Header />
      <main id="sub">

        <div className={style.productBox}>
          <Container>
            <div className={style.product}>
              <h3>
                베스트 상품
              </h3>
              <ProductBestList />
            </div>
          </Container>
        </div>

        <div className={style.productBox}>
          <Container>
            <div className={style.product}>
              <h3>
                전체 상품
              </h3>

              <div className={style.searchWrap}>
                <ProductSearch
                  productSearch={productSearch}
                  getProductData={getProductData}
                />

                <div className={style.btnBox}>
                  <Link to={'/additem'} className={style.addBtn}>
                    상품 등록하기
                  </Link>
                </div>

                <CustomSelect
                  selectView={selectView}
                  displaySortOrder={displaySortOrder}
                  toggleSelect={toggleSelect}
                  handleSortChange={handleSortChange}
                />
              </div>

              {
                filterItems.length === 0 ? (
                  <p>
                    검색된 상품이 없습니다.
                  </p>
                ) : (
                  <ProductList
                    filterItems={filterItems}
                  />
                )
              }

            </div>
          </Container>
        </div>

        <Pagination
          currentPage={page}
          totalPage={totalPage}
          setPage={setPage}
        />

      </main >

      <Footer />
    </>
  )

}