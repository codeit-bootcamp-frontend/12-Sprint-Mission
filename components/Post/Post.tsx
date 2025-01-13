import styles from "./Post.module.css";
import profile from "@/public/profile.svg";
import Image from "next/image";
import heart from "@/public/heart.svg";
import { useEffect, useState } from "react";

export default function Post() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function fetchArticles() {
            const response = await fetch(
                "/api/articles?page=1&pageSize=5&orderBy=recent"
            );
            const data = await response.json();
            if (data.list) {
                setArticles(data.list);
            }
        }

        fetchArticles();
    }, []);

    return (
        <>
            <div className={styles.Post}>
                <div className={styles.PostTitleBar}>
                    <div className={styles.PostTitleBarText}>게시글</div>
                    <button className={styles.PostTitleBarBtn}>
                        <p className={styles.PostTitleBardBtnText}>글쓰기</p>
                    </button>
                </div>
                <div className={styles.PostComment}>
                    <div className={styles.PostCommentBar}>
                        <input className={styles.PostCommentBarInput}></input>
                        <div className={styles.PostCommentBarDropdown}></div>
                    </div>
                    <div className={styles.PostCommentSection}>
                        {articles.map((article) => (
                            <div className={styles.PostCommentMap}>
                                <div className={styles.PostComment}>
                                    <div className={styles.PostCommentData}>
                                        <div
                                            className={
                                                styles.PostCommentDataText
                                            }
                                        >
                                            {article.content}
                                        </div>
                                        <div
                                            className={
                                                styles.PostCommentDataImg
                                            }
                                        >
                                            <img src={article.image}></img>
                                        </div>
                                    </div>
                                    <div className={styles.PostCommentDetail}>
                                        <div
                                            className={
                                                styles.PostCommentDetailData
                                            }
                                        >
                                            <div
                                                className={
                                                    styles.PostCommentDetailDataImg
                                                }
                                            >
                                                <Image
                                                    src={profile}
                                                    alt="profile"
                                                    width={24}
                                                    height={24}
                                                />
                                            </div>
                                            <div
                                                className={
                                                    styles.PostCommentDetailDataContainer
                                                }
                                            >
                                                <div
                                                    className={
                                                        styles.PostCommentDetailDataNickname
                                                    }
                                                >
                                                    {article.writer.nickname}
                                                </div>
                                                <div
                                                    className={
                                                        styles.PostCommentDetailDataDate
                                                    }
                                                >
                                                    {new Date(
                                                        article.createdAt
                                                    ).toLocaleDateString()}
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className={
                                                styles.PostCommentDetailFavorite
                                            }
                                        >
                                            <div
                                                className={
                                                    styles.PostCommentDetailFavoriteImg
                                                }
                                            >
                                                <Image
                                                    src={heart}
                                                    alt="heart"
                                                    width={24}
                                                    height={24}
                                                />
                                            </div>
                                            <div
                                                className={
                                                    styles.PostCommentDetailFavoriteNum
                                                }
                                            >
                                                {article.likeCount}
                                            </div>
                                        </div>
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
