import SearchForm from "@/components/ui/SearchForm";
import ArticleList from "@/components/board/ArticleList";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import Link from "next/link";
import styles from "@/styles/Boards.module.css";

export default function AllArticleSection() {
  const [articles, setArticles] = useState([]);

  async function getArticles() {
    const res = await axios.get("/articles");
    const nextArticles = res.data.list;
    setArticles(nextArticles);
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.allArticleTitle}>
          <p className={styles.title}>게시글</p>
          <Link className={`${styles.button} button`} href="/boards/write">
            글쓰기
          </Link>
        </div>
        <SearchForm />
        <ArticleList articles={articles} />
      </div>
    </>
  );
}
