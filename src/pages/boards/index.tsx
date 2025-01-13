import { GetServerSideProps } from "next";
import style from "./index.module.css";
import { Article, FetchArticlesResponse } from "@/types";
import { fetchArticles } from "@/lib/fetchArticles";
import BestItemCard from "@/components/BestItemCard";

interface BoardPageProps {
  bestArticles: FetchArticlesResponse;
}

export default function Page({ bestArticles }: BoardPageProps) {
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
    </>
  );
}

export const getServerSideProps: GetServerSideProps<BoardPageProps> = async () => {
  const bestArticles = await fetchArticles({
    page: 1,
    pageSize: 3,
    orderBy: "like",
  });
  return {
    props: {
      bestArticles,
    },
  };
};
