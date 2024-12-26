import styles from "./Tag.module.css";

const Tag = ({ tags }) => {
  console.log(tags);
  if (!tags) {
    return <p>태그가 없습니다.</p>;
  }
  return (
    <div className={styles.container}>
      {tags.map((tag) => {
        return (
          <div key={tag} className={styles.tag}>
            #{tag}
          </div>
        );
      })}
    </div>
  );
};

export default Tag;
