// components/boards/BestArticle.tsx
import React from "react";
import styles from "./BestArticle.module.css";

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

const BestArticle: React.FC<BestArticleProps> = ({ articles }) => {
  return (
    <div className={styles.bestArticles}>
      {articles.map((article) => (
        <div key={article.id} className={styles.articleCard}>
          <img
            src={article.image}
            alt={article.title}
            className={styles.articleImage}
          />
          <div className={styles.articleInfo}>
            <h3 className={styles.articleTitle}>{article.title}</h3>
            <p className={styles.articleNickname}>
              작성자: {article.writer.nickname}
            </p>
            <p className={styles.articleLikeCount}>
              좋아요: {article.likeCount}
            </p>
            <p className={styles.articleDate}>
              작성일: {new Date(article.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestArticle;
