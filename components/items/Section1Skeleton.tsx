import styles from "./Skeleton.module.css";

const repeat = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

export default function Section1Skeleton() {
  return (
    <ul className={styles.section1Wrap}>
      {repeat.map((item) => {
        return (
          <li key={item.id} className={styles.skeletonBox}>
            <div className={styles.skeletonLoading}></div>
          </li>
        );
      })}
    </ul>
  );
}
