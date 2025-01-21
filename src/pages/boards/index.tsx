import { GetServerSideProps } from "next";
import style from "./index.module.css";
import { Article, FetchArticlesResponse } from "@/types";
import { fetchArticles } from "@/lib/fetchArticles";
import BestItemCard from "@/components/BestItemCard";
import BoardHeader from "@/components/BoardHeader";
import ArticleList from "@/components/ArticleList";

interface BoardPageProps {
  bestArticles: FetchArticlesResponse;
  initialArticles: FetchArticlesResponse;
  initialOrder: "recent" | "like";
}

export default function Page({ bestArticles, initialArticles, initialOrder }: BoardPageProps) {
  return (
    <>
      <div>
        <h3 className={style.title}>베스트 게시글</h3>
        <div className={style.best_section}>
          {bestArticles.list.map((article: Article) => (
            <BestItemCard key={article.id} article={article} />
          ))}
        </div>
      </div>
      <BoardHeader />
      <ArticleList initialArticles={initialArticles} initialOrder={initialOrder} />
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
