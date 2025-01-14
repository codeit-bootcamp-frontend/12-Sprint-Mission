import Link from "next/link";
import { Article } from "@/types/article";
import { Author, Like, Thumbnail } from "@/components/ui";
import styles from "./BoardItem.module.scss";

export default function BoardItem({ data }: { data: Article }) {
  const { likeCount, writer, image, title, updatedAt, id } = data;
  const thumbnailImage = image || undefined;

  return (
    <div className={styles.item}>
      <div className={styles.header}>
        <div className={styles.content}>
          <Link href={`/boards/${id}`}>
            <h3 className={styles.title}>{title}</h3>
          </Link>
        </div>
        <div className={styles.thumbnail}>
          <Thumbnail src={thumbnailImage} alt={title} border mini />
        </div>
      </div>
      <div className={styles.meta}>
        <div className={styles.author}>
          <Author nickname={writer.nickname} updatedAt={updatedAt} dir="row" />
        </div>
        <Like count={likeCount} max={9999} />
      </div>
    </div>
  );
}
