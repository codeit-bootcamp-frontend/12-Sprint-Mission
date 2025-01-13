import styles from "./BestPost.module.css";

export default function BestPost() {
    return (
        <>
            <div className={styles.BestPostContainer}>
                <div className={styles.BestPost}>
                    <div className={styles.BestPostTitle}>베스트 게시글</div>
                    <div className={styles.BestPostTopic}>
                        <div className={styles.BestPostTopicMap}>
                            <div className={styles.BestTopicImg}></div>
                            <div className={styles.BestTopicContent}>
                                <div
                                    className={styles.BestTopicContentText}
                                ></div>
                                <img
                                    className={styles.BestTopicContentImg}
                                ></img>
                            </div>
                            <div className={styles.BestTopicDetail}>
                                <div className={styles.BestTopicDetailData}></div>
                                <div className={styles.BestTopicDetailDate}></div>
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
