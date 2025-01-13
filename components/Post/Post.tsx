import styles from "./Post.module.css";

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
                    <div className={styles.PostCommentBar}></div>
                    <div className={styles.PostCommentSection}>
                        <div className={styles.PostCommentMap}></div>
                        <div className={styles.PostCommentMap}></div>
                    </div>
                </div>
            </div>
        </>
    );
}
