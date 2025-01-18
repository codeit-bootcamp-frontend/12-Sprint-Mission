// pages/boards/index.tsx
import { GetServerSideProps } from "next";
import BestArticle from "../components/boards/BestArticle"; // BestArticle 컴포넌트 경로 맞추기
import styles from "@/styles/boardsPage.module.css";

interface Article {
  id: number;
  title: string;
  content: string;
  likeCount: number;
  writer: {
    nickname: string;
  };
  image: string;
  createdAt: string;
}

interface BestArticleProps {
  articles: Article[];
}

export const getServerSideProps: GetServerSideProps<
  BestArticleProps
> = async () => {
  try {
    const res = await fetch("https://panda-market-api.vercel.app/article");
    const data = await res.json();

    // 게시물 likeCount 기준 내림차순 정렬
    const sortedArticles = data.list.sort(
      (a: Article, b: Article) => b.likeCount - a.likeCount
    );

    return {
      props: {
        articles: sortedArticles.slice(0, 3), // 데스크탑 기준 3개
      },
    };
  } catch (error) {
    console.error("Failed to fetch articles:", error);
    return {
      props: {
        articles: [],
      },
    };
  }
};

export default function Page({ articles }: BestArticleProps) {
  return (
    <div className={styles.boardContainer}>
      <div className={styles.bestSection}>
        <label className={styles.bestLabel}>베스트 게시글</label>
        <BestArticle articles={articles} />
        <div>게시물</div>
      </div>
      <div className={styles.postSection}>
        <div className={styles.labelSection}>
          <label className={styles.postLabel}>게시글</label>
          <button className={styles.postBtn}>글쓰기</button>
        </div>
        <div className={styles.searchSection}>
          <input className={styles.searchInput} />
          <button>드롭다운</button>
        </div>
        <div>게시물</div>
      </div>
    </div>
  );
}
