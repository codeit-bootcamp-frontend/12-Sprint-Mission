import styles from "./Activity.module.scss";

export default function Activity({
  productsCount,
  favoritesCount,
}: {
  productsCount: number;
  favoritesCount: number;
}) {
  return (
    <div className={styles.info}>
      <div className={styles.item}>
        <div className={styles.label}>등록한 상품</div>
        <div className={styles.count}>{productsCount}</div>
      </div>
      <div className={styles.item}>
        <div className={styles.label}>좋아요</div>
        <div className={styles.count}>{favoritesCount}</div>
      </div>
    </div>
  );
}
