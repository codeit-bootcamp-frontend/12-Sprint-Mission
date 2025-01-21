import SearchForm from "@/components/SearchForm";
import ArticleList from "@/components/ArticleList";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";

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
      <h1>자유게시판</h1>
      <SearchForm />
      <ArticleList articles={articles} />
    </>
  );
}
