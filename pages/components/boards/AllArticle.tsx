// components/boards/AllArticle.tsx
import React from "react";
import styles from "./allArticle.module.css";
import { Article } from "@/types/articleTypes";
import Image from "next/image";
import DefaultImage from "../../assets/icon/ic_default.png";
import HeartIc from "../../assets/icon/ic_heart.png";
import Profile from "../../assets/icon/ic_profile.png";

interface AllArticleProps {
  article: Article;
}

const AllArticle: React.FC<AllArticleProps> = ({ article }) => {
  return (
    <div className={styles.articleCard}>
      <div className={styles.articleMain}>
        <p className={styles.articleTitle}>{article.title}</p>
        <div className={styles.imgSection}>
          <Image
            src={article.image || DefaultImage}
            alt={article.title}
            width={48}
            height={45}
            className={styles.articleImage}
          />
        </div>
      </div>

      <div className={styles.articleInfo}>
        <div className={styles.infoLeft}>
          <Image
            src={Profile}
            alt="프로필아이콘"
            className={styles.profileIcon}
          />
          <p className={styles.articleNickname}>{article.writer.nickname}</p>
          <p className={styles.articleDate}>
            {new Date(article.createdAt).toLocaleDateString()}
          </p>
        </div>
        <div className={styles.infoRight}>
          <Image src={HeartIc} alt="하트아이콘" className={styles.heartIcon} />
          <p className={styles.articleLikeCount}>{article.likeCount}</p>
        </div>
      </div>
    </div>
  );
};

export default AllArticle;
