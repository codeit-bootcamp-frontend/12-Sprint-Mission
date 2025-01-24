import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import styles from "@/styles/Boards.module.css";
import BestArticle from "./BestArticle";

export default function BestArticleSection() {
  const [bestArticles, setBestArticles] = useState([]);

  // 베스트 게시글 불러오기
  async function getBestArticles() {
    try {
      const res = await axios.get("/articles");
      const nextBestArticles = res.data.list;

      // likeCount 기준으로 정렬 후 상위 3개 추출
      const sortedArticles = nextBestArticles
        .sort((a, b) => b.likeCount - a.likeCount)
        .slice(0, 3);

      setBestArticles(sortedArticles);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  }

  useEffect(() => {
    getBestArticles();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <p className={styles.containerTitle}>베스트 게시글</p>
        <BestArticle articles={bestArticles} />
      </div>
    </>
  );
}
