import styles from "./Skeleton.module.css";

export default function TextSkeleton() {
  return (
    <>
      <div className={styles.textSkeletonBox}>
        <div className={styles.section1}>
          <div className={`${styles.skeletonBox} ${styles.text}`}>
            <div className={styles.skeletonLoading}></div>
          </div>
          <div className={`${styles.skeletonBox} ${styles.text}`}>
            <div className={styles.skeletonLoading}></div>
          </div>
        </div>
        <div className={styles.section2}>
          <div className={`${styles.skeletonBox} ${styles.text}`}>
            <div className={styles.skeletonLoading}></div>
          </div>
          <div className={`${styles.skeletonBox} ${styles.text}`}>
            <div className={styles.skeletonLoading}></div>
          </div>
        </div>
        <div className={styles.section3}>
          <div className={`${styles.skeletonBox} ${styles.text}`}>
            <div className={styles.skeletonLoading}></div>
          </div>
        </div>
      </div>
    </>
  );
}
