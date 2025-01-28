import { GetStaticProps } from "next";
import BestArticle from "../components/boards/BestArticle";
import AllArticle from "../components/boards/AllArticle";
import styles from "@/styles/boardsPage.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import ArrowDown from "../assets/icon/ic_arrow_down.png";
import Image from "next/image";
import { Article } from "@/types/articleTypes";
import fetchArticles from "@/lib/fetchArticles";
import sortIcon from "../assets/icon/ic_sort.png";

interface BestArticleProps {
  bestArticles: Article[];
  allArticles: Article[];
}

export const getStaticProps: GetStaticProps = async () => {
  const pageSize = 3;
  let bestArticles: Article[] = [];
  let allArticles: Article[] = [];

  try {
    const bestData = await fetchArticles(1, pageSize, "like");
    bestArticles = bestData.list || [];

    const allData = await fetchArticles(1, 10, "recent");
    allArticles = allData.list || [];
  } catch (error) {
    console.error("Error fetching articles:", error);
  }

  return {
    props: {
      bestArticles,
      allArticles,
    },
  };
};

export default function Page({ bestArticles, allArticles }: BestArticleProps) {
  const [sortedArticles, setSortedArticles] = useState(allArticles);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedValue, setSelectedValue] = useState("최신순");
  const [showDropdown, setShowDropdown] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [visibleBestArticles, setVisibleBestArticles] = useState(bestArticles);
  const [pageSize, setPageSize] = useState(3);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (windowWidth < 768) {
      setPageSize(1);
    } else if (windowWidth < 1200) {
      setPageSize(2);
    } else {
      setPageSize(3);
    }
  }, [windowWidth]);

  useEffect(() => {
    const fetchBestArticles = async () => {
      try {
        const bestData = await fetchArticles(1, pageSize, "like");
        const newBestArticles = bestData.list || [];
        setVisibleBestArticles(newBestArticles);
      } catch (error) {
        console.error("Error fetching best articles:", error);
      }
    };

    fetchBestArticles();
  }, [pageSize]);

  const fetchSortedArticles = async (
    orderBy: "recent" | "like",
    reset: boolean = false
  ) => {
    try {
      const data = await fetchArticles(1, 10, orderBy);
      const newArticles = data.list || [];

      if (reset) {
        setSortedArticles(newArticles);
        setPage(1);
      } else {
        setSortedArticles((prev) => [...prev, ...newArticles]);
      }

      if (newArticles.length < 10) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching sorted articles:", error);
    }
  };

  const handleSortChange = (value: string) => {
    setSelectedValue(value);
    setShowDropdown(false);

    fetchSortedArticles(value === "최신순" ? "recent" : "like", true);
  };

  // 검색 필터
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);
  };

  const filteredArticles = sortedArticles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm)
  );

  // 무한 스크롤
  const fetchMoreArticles = async () => {
    if (!hasMore) return;

    try {
      const nextPage = page + 1;
      const data = await fetchArticles(
        nextPage,
        10,
        selectedValue === "최신순" ? "recent" : "like"
      );
      const newArticles = data.list || [];

      if (newArticles.length > 0) {
        setSortedArticles((prev) => [...prev, ...newArticles]);
        setPage(nextPage);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching more articles:", error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        fetchMoreArticles();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, selectedValue]);

  return (
    <div className={styles.boardContainer}>
      <div className={styles.bestSection}>
        <label className={styles.bestLabel}>베스트 게시글</label>
        <div className={styles.bestArticles}>
          {visibleBestArticles.map((article) => (
            <BestArticle key={article.id} article={article} />
          ))}
        </div>
      </div>

      <div className={styles.postSection}>
        <div className={styles.labelSection}>
          <label className={styles.postLabel}>게시글</label>
          <Link href={""} className={styles.postEditBtn}>
            글쓰기
          </Link>
        </div>
        <div className={styles.searchSection}>
          <input
            className={styles.searchInput}
            placeholder="검색할 상품을 입력해주세요"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div className={styles.sortSection}>
            <div
              className={styles.sortDropdown}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {windowWidth < 768 ? (
                <Image
                  src={sortIcon}
                  alt="정렬 아이콘"
                  className={styles.sortIcon}
                />
              ) : (
                <>
                  <span>{selectedValue}</span>
                  <Image
                    src={ArrowDown}
                    alt="아래화살표"
                    className={styles.arrowIcon}
                  />
                </>
              )}
              {showDropdown && (
                <ul className={styles.dropdownList}>
                  <li
                    onClick={() => handleSortChange("최신순")}
                    className={styles.dropdownItem}
                  >
                    최신순
                  </li>
                  <li
                    onClick={() => handleSortChange("좋아요순")}
                    className={styles.dropdownItem}
                  >
                    좋아요순
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className={styles.allArticles}>
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <AllArticle key={article.id} article={article} />
            ))
          ) : (
            <p>게시물이 없습니다.</p>
          )}
          {hasMore && <p>로딩중...</p>}
        </div>
      </div>
    </div>
  );
}
