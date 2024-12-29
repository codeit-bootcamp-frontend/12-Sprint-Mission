import { Chip } from "@components/ui";
import styles from "./Tags.module.scss";

interface Tags {
  tags: string[];
  onRemoveItem?: (tag: string) => void;
}

export function Tags({ tags, onRemoveItem }: Tags) {
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
