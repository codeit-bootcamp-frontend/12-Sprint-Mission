import styles from "./Skeleton.module.css";

const repeat = [{ id: 1 }, { id: 2 }, { id: 3 }];

export default function CommentSkeleton() {
  return (
    <ul className={styles.commentSkeletonWrap}>
      {repeat.map((item) => {
        return (
          <li key={item.id} className={styles.commentBox}>
            <div className={`${styles.skeletonBox} ${styles.comment}`}>
              <div className={styles.skeletonLoading}></div>
            </div>
            <div className={styles.infoWrap}>
              <div
                className={`${styles.skeletonBox} ${styles.profileThubmnail}`}
              >
                <div className={styles.skeletonLoading}></div>
              </div>
              <div className={styles.textWrap}>
                <div className={`${styles.skeletonBox} ${styles.nickname}`}>
                  <div className={styles.skeletonLoading}></div>
                </div>
                <div className={`${styles.skeletonBox} ${styles.day}`}>
                  <div className={styles.skeletonLoading}></div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
