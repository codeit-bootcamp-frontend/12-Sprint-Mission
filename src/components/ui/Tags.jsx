import { Chip } from "@components/ui";
import styles from "./Tags.module.scss";

export function Tags({ tags, onRemoveItem }) {
  return (
    <div className={styles["item-tags"]}>
      {tags?.map((tag) => (
        <Chip
          key={tag}
          text={`#${tag}`}
          {...(onRemoveItem && {
            onClick: () => onRemoveItem(tag),
            removable: true,
          })}
        />
      ))}
    </div>
  );
}
