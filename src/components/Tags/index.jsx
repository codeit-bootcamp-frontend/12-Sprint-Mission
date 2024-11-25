import Chip from "../Chip";
import styles from "./styles.module.scss";

export default function Tags({ tags, onRemoveItem }) {
  return (
    <div className={styles["item-tags"]}>
      {tags?.map((tag) => (
        <Chip
          key={tag}
          text={tag}
          onClick={() => onRemoveItem(tag)}
          removable
        />
      ))}
    </div>
  );
}
