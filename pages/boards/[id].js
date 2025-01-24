import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";

export default function Article() {
  const [article, setArticle] = useState();
  const router = useRouter();
  const { id } = router.query;

  async function getArticle(targetId) {
    const res = await axios.get(`/articles/${targetId}`);
    const nextArticle = res.data;
    setArticle(nextArticle);
  }

  useEffect(() => {
    if (!id) return;

    getArticle(id);
  }, [id]);

  if (!article) return null;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <img src={article.image} alt={article.title} />
      <p>{article.writer.nickname}</p>
      <p>{new Date(article.createdAt).toLocaleDateString()}</p>
    </div>
  );
}
