import styles from "../../styles/app/loading.module.css";

export const Loading = () => {
  return (
    <div className={styles.loaderContainer}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loading;
