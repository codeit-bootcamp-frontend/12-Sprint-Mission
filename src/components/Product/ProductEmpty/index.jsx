import styles from "./styles.module.scss";

export default function ProductItemEmpty({ keyword }) {
  return (
    <div className={styles.empty}>
      {keyword && `'${keyword}'로 검색된`} 상품이 없습니다.
    </div>
  );
}
