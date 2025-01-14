import styles from "./BestPost.module.css";
import medal from "@/public/medal.svg";
import React, { useState, useEffect } from "react"; // React import 추가
import heart from "@/public/heart.svg";
import Image from "next/image";

export default function BestPost() {
    const [articles, setArticles] = useState<any[]>([]);

    useEffect(() => {
        const fetchArticles = async () => {
            const response = await fetch("/api/BestApi");
            const data = await response.json();
            setArticles(data.list || []); // API에서 받은 데이터를 상태에 저장
        };

        fetchArticles();
    }, []);

    return (
        <>
            <div className={styles.BestPostContainer}>
                <div className={styles.BestPost}>
                    <div className={styles.BestPostTitle}>베스트 게시글</div>
                    <div className={styles.BestPostTopic}>
                        {articles.map((article) => (
                            <div className={styles.BestPostTopicMap}>
                                <div className={styles.BestTopicImg}>
                                    <div className={styles.BestTopicImgInner}>
                                        <Image
                                            src={medal}
                                            alt="medal"
                                            width={16}
                                            height={16}
                                        />
                                        <p
                                            className={
                                                styles.BestPostTopicImgInnerText
                                            }
                                        >
                                            Best
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.BestTopicContent}>
                                    <div
                                        className={styles.BestTopicContentText}
                                    >
                                        {article.content}
                                    </div>
                                    <div
                                        className={styles.BestTopicContentImg}
                                    >
                                        <img src={article.image}></img>
                                    </div>
                                </div>
                                <div className={styles.BestTopicDetail}>
                                    <div className={styles.BestTopicDetailData}>
                                        <div
                                            className={
                                                styles.BestTopicDetailDataNickname
                                            }
                                        >
                                            {article.writer.nickname}
                                        </div>
                                        <div
                                            className={
                                                styles.BestTopicDetailDataFavorite
                                            }
                                        >
                                            <Image
                                                src={heart}
                                                alt="heart"
                                                width={16}
                                                height={16}
                                            />
                                            <div
                                                className={
                                                    styles.BestTopicDetailDataFavoriteNum
                                                }
                                            >
                                                {article.likeCount}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.BestTopicDetailDate}>
                                        {new Date(
                                            article.createdAt
                                        ).toLocaleDateString()}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
