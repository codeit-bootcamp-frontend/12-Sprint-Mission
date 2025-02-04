import styles from "./index.module.css";
import ArticleSection from "./ArticleSection";
import InputSection from "./InputSection";
import CommentList from "./CommentList";
import { GetServerSideProps } from "next";
import getArticle from "@/lib/get-article";
import { Article, Comment } from "@/types";
import getComments from "@/lib/get-comments";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { articleId } = context.params as { articleId: string };

  try {
    const article = await getArticle(Number(articleId));
    const commentList = await getComments(Number(articleId));

    if (!article) {
      return { notFound: true };
    }
    return {
      props: {
        articleId: Number(articleId),
        article,
        commentList,
      },
    };
  } catch (error) {
    console.error("Failed to fetch article:", error);
    return { notFound: true };
  }
};

type ArticlePageProps = {
  articleId: number;
  article: Article;
  commentList: Comment[];
};

export default function ArticlePage({
  articleId,
  article,
  commentList,
}: ArticlePageProps) {
  return (
    <div className={styles.container}>
      <ArticleSection article={article} />
      <InputSection articleId={articleId} />
      <CommentList commentList={commentList} />
    </div>
  );
}
