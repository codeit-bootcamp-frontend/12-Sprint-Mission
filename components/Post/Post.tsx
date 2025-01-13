import styles from "./Post.module.css";
import profile from "@/public/profile.svg";
import Image from "next/image";
import heart from "@/public/heart.svg";
import { useEffect, useState } from "react";
import Link from "next/link";
import Dropdown from "../Dropdown/Dropdown";

export default function Post() {
    const [articles, setArticles] = useState([]);
    const [orderBy, setOrderBy] = useState("recent");
    const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태 추가
    const [filteredArticles, setFilteredArticles] = useState([]);

    useEffect(() => {
        async function fetchArticles() {
            const encodedOrderBy = encodeURIComponent(orderBy);
            const response = await fetch(
                `/api/articles?page=1&pageSize=5&orderBy=${encodedOrderBy}`
            );
            const data = await response.json();
            if (data.list) {
                setArticles(data.list);
                setFilteredArticles(data.list); // 초기에는 전체 게시글을 필터링된 리스트로 설정
            }
        }

        fetchArticles();
    }, [orderBy]);

    useEffect(() => {
        // 검색어에 맞는 게시글 필터링
        if (searchQuery) {
            setFilteredArticles(
                articles.filter((article) =>
                    article.content
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                )
            );
        } else {
            setFilteredArticles(articles); // 검색어가 없으면 전체 게시글을 다시 보여줌
        }
    }, [searchQuery, articles]);

    const handleSortChange = (orderBy: string) => {
        setOrderBy(orderBy); // 드롭다운에서 선택한 값으로 정렬 기준 변경
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value); // 검색어 상태 업데이트
    };
    return (
        <>
            <div className={styles.Post}>
                <div className={styles.PostTitleBar}>
                    <div className={styles.PostTitleBarText}>게시글</div>
                    <Link href="/write">
                        <button className={styles.PostTitleBarBtn}>
                            <p className={styles.PostTitleBardBtnText}>
                                글쓰기
                            </p>
                        </button>
                    </Link>
                </div>
                <div className={styles.PostComment}>
                    <div className={styles.PostCommentBar}>
                        <input
                            className={`${styles.PostCommentBarInput} ${styles.PostCommentBarInputWithImage}`}
                            type="text"
                            placeholder="검색할 상품을 입력해주세요"
                            value={searchQuery}
                            onChange={handleSearchChange} 
                        />
                        <Dropdown onChange={handleSortChange} />
                    </div>
                    <div className={styles.PostCommentSection}>
                        {filteredArticles.map((article) => (
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
