import Link from "next/link";
import { Author, Badge, Date, Like, Thumbnail } from "@/components/ui";
import { Article } from "@/types/article";
import styles from "./BestItem.module.scss";
import Image from "next/image";
import bestIcon from "@assets/img/icon/icon_best.svg";

export default function BestItem({ data }: { data: Article }) {
  const { likeCount, writer, image, title, updatedAt, id } = data;
  const thumbnailImage = image || undefined;

  return (
    <Link href={`/boards/${id}`} className={styles.item}>
      <div className={styles.status}>
        <Badge label="Best" icon={<Image src={bestIcon} alt="best" />} />
      </div>
      <div className={styles.header}>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <div className={styles.thumbnail}>
          <Thumbnail src={thumbnailImage} alt={title} border mini />
        </div>
      </div>
      <div className={styles.meta}>
        <div className={styles.author}>
          <Author
            nickname={writer.nickname}
            updatedAt={updatedAt}
            dir="row"
            mini
          />
        </div>
        <Like size="sm" count={likeCount} max={9999} />
        <div className={styles.date}>
          <Date date={updatedAt} />
        </div>
      </div>
    </Link>
  );
}
