import { useState, useEffect, useRef } from "react";
import { Article, FetchArticlesResponse } from "@/types";
import { fetchArticles } from "@/lib/fetchArticles";
import { ArticleItemCard } from "@/components/ArticleItemCard";
import Dropdown from "@/components/Dropdown";
import Image from "next/image";
import searchIcon from "@/assets/icons/search-icon.svg";
import style from "./ArticleList.module.css";

interface ArticleListProps {
  initialArticles: FetchArticlesResponse;
  initialOrder: "recent" | "like";
}

export default function ArticleList({ initialArticles, initialOrder }: ArticleListProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [orderBy, setOrderBy] = useState<"recent" | "like">(initialOrder);

  const selectedLabel = orderBy === "like" ? "인기순" : "최신순";

  const handleSelect = (label: "최신순" | "인기순", value: "recent" | "like") => {
    setOrderBy(value);

    // 정렬이 바뀌면 page/게시글 초기화
    setPage(1);
    setArticles([]);
    setHasMore(true);

    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  // 검색어 (keyword)
  const [keyword, setKeyword] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSearchSubmit = () => {
    // 검색어 확정 -> 목록 리셋
    setPage(1);
    setArticles([]);
    setHasMore(true);
  };

  const onKeyDownSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchSubmit();
    }
  };

  // 게시글 목록 상태
  const [articles, setArticles] = useState<Article[]>(initialArticles.list);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // IntersectionObserver
  const observerTarget = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!observerTarget.current) return;

    const onIntersect: IntersectionObserverCallback = (entries) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore) {
        setPage((prev) => prev + 1);
      }
    };

    const observer = new IntersectionObserver(onIntersect, { threshold: 0.1 });
    observer.observe(observerTarget.current);

    return () => observer.disconnect();
  }, [observerTarget, hasMore]);

  const [didUseSSRData, setDidUseSSRData] = useState(false);
  // page, orderBy, keyword 바뀔 때 => fetchArticles
  useEffect(() => {
    async function loadArticles() {
      try {
        const data = await fetchArticles({
          page,
          pageSize: 10,
          orderBy,
          keyword,
        });

        if (page === 1) {
          setArticles(data.list);
        } else {
          setArticles((prev) => [...prev, ...data.list]);
        }

        if (data.list.length < 10) {
          setHasMore(false);
        }
      } catch (err) {
        console.error(err);
      }
    }

    // SSR 데이터를 쓰는 조건 (page=1, 이미 articles 존재, 정렬이 초기상태, 검색어 없음)
    if (page === 1 && !didUseSSRData && orderBy === initialOrder && keyword === "") {
      setDidUseSSRData(true);
    } else {
      loadArticles();
    }
  }, [page, orderBy, keyword, didUseSSRData, initialOrder]);

  // 렌더
  return (
    <div>
      <div className={style.post_action}>
        <div className={style.search_container}>
          <Image src={searchIcon} alt="검색 아이콘" className={style.searchIcon} width={15} height={15} />
          <input
            className={style.search_bar}
            placeholder="검색할 상품을 입력해주세요"
            value={keyword}
            onChange={handleSearchChange}
            onKeyDown={onKeyDownSearch}
          />
        </div>

        <Dropdown isOpen={isOpen} selectedLabel={selectedLabel} onToggle={handleToggle} onSelect={handleSelect} />
      </div>

      <div className={style.all_section}>
        {articles.map((article) => (
          <ArticleItemCard key={article.id} article={article} />
        ))}
      </div>

      <div ref={observerTarget} style={{ height: 1 }} />
      {!hasMore && <p>더 이상 데이터가 없습니다.</p>}
    </div>
  );
}
