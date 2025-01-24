import { useEffect, useState, useRef, useCallback } from "react";
import axios from "@/lib/axios";
import Link from "next/link";
import styles from "@/styles/Boards.module.css";
import SearchForm from "@/components/ui/SearchForm";
import Dropdown from "@/components/button/DropdownButton";
import ArticleList from "@/components/board/ArticleList";

export default function AllArticleSection() {
  const [articles, setArticles] = useState([]); // 게시글 데이터
  const [page, setPage] = useState(1); // 현재 페이지 번호
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태
  const [hasMore, setHasMore] = useState(true); // 추가 데이터 여부

  const observer = useRef();

  // 데이터 가져오기 함수
  const getArticles = async (currentPage) => {
    setIsLoading(true);
    try {
      const res = await axios.get(`/articles`, {
        params: {
          page: currentPage,
          pageSize: 10,
          orderBy: "recent", // 정렬 기준
        },
        headers: {
          accept: "application/json",
        },
      });

      const nextArticles = res.data.list;

      // 중복 데이터 방지
      setArticles((prev) => {
        const newArticles = nextArticles.filter(
          (article) =>
            !prev.some((prevArticle) => prevArticle.id === article.id)
        );
        return [...prev, ...newArticles];
      });

      // 추가 데이터가 없으면 로드 중단
      setHasMore(nextArticles.length > 0);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
    setIsLoading(false);
  };

  // Intersection Observer로 무한 스크롤 구현
  const lastArticleElementRef = useCallback(
    (node) => {
      if (isLoading) return; // 로딩 중이면 관찰 중지
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1); // 다음 페이지로 이동
        }
      });

      if (node) observer.current.observe(node); // 마지막 요소 관찰
    },
    [isLoading, hasMore]
  );

  // 페이지가 변경될 때 데이터를 가져옴
  useEffect(() => {
    getArticles(page);
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

        {/* 검색 및 필터*/}
        <div className={styles.searchContainer}>
          <SearchForm />
          <Dropdown />
        </div>

        {/* 게시글 목록 */}
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
