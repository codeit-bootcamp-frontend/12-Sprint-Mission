import SearchForm from "@/components/ui/SearchForm";
import ArticleList from "@/components/board/ArticleList";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import Header from "@/components/layout/Header";

export default function Boards() {
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
      <Header />
      <h1>자유게시판</h1>
      <SearchForm />
      <ArticleList articles={articles} />
    </>
  );
}
