import Link from "next/link";
import { Article } from "../../types";
import styles from "./board-best-list.module.css";
import formatDate from "@/lib/format-data";

export default function BoardBestList(data: Article) {
  return (
    <li className={styles.board_best_box}>
      <Link href="">
        <div className={styles.best}>
          <img src="/assets/img/icon_best.svg" alt="베스트" />
          Best
        </div>
        <div className={styles.content}>
          <h4>{data.title}</h4>
          {data.image ? (
            <figure>
              <img src={data.image as string} alt={data.title} />
            </figure>
          ) : null}
        </div>
        <div className={styles.description}>
          <h4>{data.writer.nickname}</h4>
          <div className={styles.wish}>
            <img src="/assets/img/icon_wish.svg" alt="찜" />
            <span>{data.likeCount}</span>
          </div>
          <div className={styles.date}>{formatDate(data.createdAt)}</div>
        </div>
      </Link>
    </li>
  );
}
