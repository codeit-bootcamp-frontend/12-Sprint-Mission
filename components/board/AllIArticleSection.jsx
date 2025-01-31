import { useEffect, useState, useRef, useCallback } from "react";
import axios from "@/lib/axios";
import Link from "next/link";
import styles from "@/styles/Boards.module.css";
import SearchForm from "@/components/ui/SearchForm";
import Dropdown from "@/components/button/DropdownButton";
import ArticleList from "@/components/board/ArticleList";

export default function AllArticleSection() {
  const [articles, setArticles] = useState([]); //게시글 데이터
  const [page, setPage] = useState(1); //쿼리스트링
  const [pageSize] = useState(30); // 한 페이지당 게시글 수(무한스크롤 일단 임시코드)
  const [orderBy, setOrderBy] = useState("recent"); // 기본 정렬: 최신순
  const [keyword, setKeyword] = useState(""); // 검색 키워드

  const [isLoading, setIsLoading] = useState(false); //로딩 상태
  const [hasMore, setHasMore] = useState(true); //다음 페이지(데이터)가 있는지

  const observer = useRef();

  //게시글 불러오기
  const getArticles = async (currentPage, currentOrderBy, currentKeyword) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/articles`, {
        params: {
          page: currentPage,
          pageSize,
          orderBy: currentOrderBy,
          keyword: currentKeyword,
        },
      });

      const nextArticles = response.data.list;

      // 첫 페이지(쿼리스트링)일 경우 새로운 데이터 업데이트, 아닐 경우 기존 데이터 배열 뒤에 추가
      setArticles((prev) => {
        if (currentPage === 1) return nextArticles;
        return [...prev, ...nextArticles];
      });

      // 다음 페이지(데이터)가 있는지 확인
      setHasMore(nextArticles.length > 0);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
    setIsLoading(false);
  };

  //임시 무한스크롤 코드
  const lastArticleElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  //드롭다운 데이터
  const handleOrderChange = (value) => {
    const order = value === "최신순" ? "recent" : "like";
    setOrderBy(order);
    setPage(1);
    getArticles(1, order, keyword);
  };

  //검색
  const handleSearch = (searchKeyword) => {
    setKeyword(searchKeyword);
    setPage(1);
    getArticles(1, orderBy, searchKeyword);

    if (searchKeyword === "") {
      getArticles(1, orderBy, ""); // 기본 게시글 목록 호출
    } else {
      getArticles(1, orderBy, searchKeyword); // 검색된 게시글 목록 호출
    }
  };

  //최초 게시글 불러오기
  useEffect(() => {
    getArticles(page, orderBy, keyword);
  }, [page]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.allArticle}>
          <p className={styles.containerTitle}>게시글</p>
          <Link className={`${styles.button} button`} href="/boards/write">
            글쓰기
          </Link>
        </div>

        <div className={styles.searchContainer}>
          <SearchForm onSearch={handleSearch} />
          <Dropdown onSelect={handleOrderChange} />
        </div>

        <ArticleList articles={articles} />

        <div>
          {articles.map((article, index) => {
            if (index === articles.length - 1) {
              return (
                <div key={article.id} ref={lastArticleElementRef}>
                  <h3>{article.title}</h3>
                  <p>{article.content}</p>
                </div>
              );
            } else {
              return (
                <div key={article.id}>
                  <h3>{article.title}</h3>
                  <p>{article.content}</p>
                </div>
              );
            }
          })}
        </div>

        {isLoading && <p className={styles.loading}>로딩 중...</p>}
        {!hasMore && (
          <p className={styles.noMoreData}>더 이상 게시글이 없습니다.</p>
        )}
      </div>
    </>
  );
}
