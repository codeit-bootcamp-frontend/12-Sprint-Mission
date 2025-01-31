import Link from "next/link";
import Image from "next/image";
import like from "@/public/icons/ic_heart.svg";
import profile from "@/public/icons/ic_profile.png";
import styles from "@/styles/Boards.module.css";
import defaultImg from "@/public/icons/img_default.png";

export default function ArticleList({ articles = [] }) {
  return (
    <div>
      {articles.map((articles) => (
        <div key={articles.id} className={styles.articleContainer}>
          <div className={styles.articleInfo}>
            <Link href={`/boards/${articles.id}`}>
              <p className={styles.articleTitle}>{articles.title}</p>
            </Link>
            {articles.image ? (
              <Image
                src={articles.image}
                alt={articles.title || "대표이미지"}
                width={72}
                height={72}
                style={{
                  borderRadius: "8px",
                  border: "1px solid var(--gray-100)",
                }}
              />
            ) : (
              <Image
                src={defaultImg}
                alt={"대표이미지"}
                width={72}
                height={72}
                style={{
                  borderRadius: "8px",
                  border: "1px solid var(--gray-100)",
                }}
              />
            )}
          </div>
          <div className={styles.writerInfo}>
            <div className={styles.writer}>
              <Image src={profile} alt="profile" width={24} height={24} />
              <p className={styles.nickname}>{articles.writer.nickname}</p>
              <p className={styles.date}>
                {new Date(articles.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className={styles.like}>
              <Image src={like} alt="likeCount" />
              <p className={styles.likeCount}>{articles.likeCount}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
