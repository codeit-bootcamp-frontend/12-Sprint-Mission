import { Chip } from "@components/ui";
import styles from "./Tags.module.scss";
import { Tags as TagsType } from "@type/product";

interface TagsProps {
  tags: TagsType;
  onRemoveItem?: (tag: string) => void;
}

export function Tags({ tags, onRemoveItem }: TagsProps) {
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
