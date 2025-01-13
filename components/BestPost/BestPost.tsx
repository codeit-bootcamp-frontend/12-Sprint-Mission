import styles from "./BestPost.module.css";
import medal from "@/public/medal.svg";
import heart from "@/public/heart.svg";
import Image from "next/image";

export default function BestPost() {
    return (
        <>
            <div className={styles.BestPostContainer}>
                <div className={styles.BestPost}>
                    <div className={styles.BestPostTitle}>베스트 게시글</div>
                    <div className={styles.BestPostTopic}>
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
                                <div className={styles.BestTopicContentText}>
                                    맥북 16인치 16기가 1테라 정도 사양이면
                                    얼마에 팔아야하나요?
                                </div>
                                <img
                                    className={styles.BestTopicContentImg}
                                ></img>
                            </div>
                            <div className={styles.BestTopicDetail}>
                                <div className={styles.BestTopicDetailData}>
                                    <div
                                        className={
                                            styles.BestTopicDetailDataNickname
                                        }
                                    >
                                        총명한판다
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
                                            9999+
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.BestTopicDetailDate}>
                                    2024. 04. 16
                                </div>
                            </div>
                        </div>
                        <div className={styles.BestPostTopicmap}></div>
                        <div className={styles.BestPostTopicmap}></div>
                    </div>
                </div>
            </div>
        </>
    );
}
