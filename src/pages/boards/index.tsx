import { GetServerSideProps } from "next";
import style from "./index.module.css";
import { Article, FetchArticlesResponse } from "@/types";
import Image from "next/image";
import { fetchArticles } from "@/lib/fetchArticles";
import BestItemCard from "@/components/BestItemCard";
import Dropdown from "@/components/Dropdown";
import { useEffect, useRef, useState } from "react";
import searchIcon from "@/assets/icons/search-icon.svg";
import { ArticleItemCard } from "@/components/ArticleItemCard";

interface BoardPageProps {
  bestArticles: FetchArticlesResponse;
  initialArticles: FetchArticlesResponse;
  initialOrder: "recent" | "like";
}

export default function Page({ bestArticles, initialArticles, initialOrder }: BoardPageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState("최신순");
  const [orderBy, setOrderBy] = useState<"recent" | "like">(initialOrder);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (label: string, value: string) => {
    setSelectedLabel(label);

    const newOrder = value === "like" ? "like" : "recent";
    setOrderBy(newOrder);

    // 정렬 바꾸면 page/게시글 초기화
    setPage(1);
    setArticles([]);
    setHasMore(true);

    setIsOpen(false);
  };
  const [articles, setArticles] = useState<Article[]>(initialArticles.list);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [keyword, setKeyword] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSearchSubmit = () => {
    setPage(1);
    setArticles([]);
    setHasMore(true);
  };

  const onKeyDownSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchSubmit();
    }
  };

  const observerTarget = useRef<HTMLDivElement | null>(null);

  // 1) 스크롤이 마지막 지점에 닿으면 page+1
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

  // 2) page나 orderBy가 바뀔 때 새로운 데이터 fetch → 이어붙이기
  useEffect(() => {
    // page === 1이면서 이미 SSR로 초기 데이터를 받았으므로,
    // 무한스크롤 로직은 "page > 1"일 때만 추가 fetch하도록 예외 처리.
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

    if (page === 1 && articles.length > 0 && orderBy === initialOrder && keyword === "") {
      // 이미 SSR 데이터 있음
    } else {
      loadArticles();
    }
  }, [page, orderBy]);

  return (
    <>
      <div>
        <h3 className={style.title}>베스트 게시글</h3>
        <div className={style.best_section}>
          {bestArticles.list.map((article: Article) => (
            <BestItemCard key={article.id} {...article} />
          ))}
        </div>
      </div>
      <div className={style.post_header}>
        <h3>게시글</h3>
        <button>글쓰기</button>
      </div>
      <div className={style.post_action}>
        <div className={style.search_container}>
          <Image src={searchIcon.src} alt="검색 아이콘" className={style.searchIcon} width={15} height={15} />
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
          <ArticleItemCard key={article.id} {...article} />
        ))}
      </div>

      <div ref={observerTarget} style={{ height: 1 }} />
      {!hasMore && <p>더 이상 데이터가 없습니다.</p>}
    </>
  );
}

export const getServerSideProps: GetServerSideProps<BoardPageProps> = async () => {
  const bestArticles = await fetchArticles({
    page: 1,
    pageSize: 3,
    orderBy: "like",
  });
  const initialArticles = await fetchArticles({
    page: 1,
    pageSize: 10,
    orderBy: "recent",
  });

  return {
    props: {
      bestArticles,
      initialArticles,
      initialOrder: "recent",
    },
  };
};
