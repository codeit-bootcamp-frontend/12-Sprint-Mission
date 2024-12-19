import clsx from "clsx";
import styles from "./MidSection.module.css";

const MidSection = ({ src, category, title, content, opposite = false }) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentBox}>
        <img
          src={src}
          alt={`${src}이미지`}
          className={clsx(styles.img, opposite && styles.opposite)}
        />
        <div className={clsx(styles.textBox, opposite && styles.oppositeText)}>
          <p className={styles.category}>{category}</p>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.content}>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default MidSection;
