import styles from "./Post.module.css";
import profile from "@/public/profile.svg";
import Image from "next/image";
import heart from "@/public/heart.svg";

export default function Post() {
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
                        <div className={styles.PostCommentMap}>
                            <div className={styles.PostComment}>
                                <div className={styles.PostCommentData}>
                                    <div className={styles.PostCommentDataText}>
                                        맥북 16인치 16기가 1테라 정도 사양이면
                                        얼마에 팔아야하나요?
                                    </div>
                                    <div
                                        className={styles.PostCommentDataImg}
                                    ></div>
                                </div>
                                <div className={styles.PostCommentDetail}>
                                    <div
                                        className={styles.PostCommentDetailData}
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
                                                총명한 판다
                                            </div>
                                            <div
                                                className={
                                                    styles.PostCommentDetailDataDate
                                                }
                                            >
                                                2024. 04. 16
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
                                            9999+
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
