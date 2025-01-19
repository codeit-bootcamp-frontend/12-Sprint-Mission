import React from "react";
import styles from "./bestArticle.module.css";
import Image from "next/image";
import { Article } from "@/types/articleTypes";
import HeartIc from "../../assets/icon/ic_heart.png";
import DefaultImage from "../../assets/icon/ic_default.png";
import BestBadge from "../../assets/icon/img_bestBadge.png";

interface BestArticleProps {
  article: Article;
}

const BestArticle: React.FC<BestArticleProps> = ({ article }) => {
  return (
    <div className={styles.articleCard}>
      <div className={styles.articleContainer}>
        <Image src={BestBadge} alt="베스트" className={styles.bestBadge} />
        <div className={styles.articleMain}>
          <h3 className={styles.articleTitle}>{article.title}</h3>
          <div className={styles.imageBack}>
            {article.image ? (
              <Image
                src={article.image}
                alt={article.title}
                className={styles.articleImage}
                width={48}
                height={45}
              />
            ) : (
              <Image
                src={DefaultImage}
                alt="디폴트이미지"
                className={styles.defaultImage}
                width={200}
                height={200}
              />
            )}
          </div>
        </div>
        <div className={styles.articleInfo}>
          <div className={styles.nickNameLike}>
            <p className={styles.articleNickname}>{article.writer.nickname}</p>
            <Image
              src={HeartIc}
              alt="하트아이콘"
              className={styles.heartIcon}
            />
            <p className={styles.articleLikeCount}>{article.likeCount}</p>
          </div>
          <p className={styles.articleDate}>
            {new Date(article.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestArticle;
