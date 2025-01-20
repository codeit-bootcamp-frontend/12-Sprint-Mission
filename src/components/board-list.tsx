import Link from "next/link";
import { Article } from "../../types";
import styles from "./board-list.module.css";
import formatDate from "@/lib/format-data";

export default function BoardList(data: Article) {
  return (
    <li className={styles.board_common_box}>
      <Link href="">
        <div className={styles.left}>
          <h4>{data.title}</h4>
          <div className={styles.bottom}>
            <div className={styles.profile}>
              <img src="/assets/img/icon_my.svg" alt="" />
              <span>{data.writer.nickname}</span>
            </div>
            <div className={styles.date}>{formatDate(data.createdAt)}</div>
          </div>
        </div>
        <div className={styles.right}>
          {data.image ? (
            <figure>
              <img
                src={data.image as string}
                alt={data.title}
                onError={(e) => {
                  e.currentTarget.src = "/assets/img/icon_empty.svg";
                }}
              />
            </figure>
          ) : null}
          <div className={styles.wish}>
            <img src="/assets/img/icon_wish.svg" alt="찜" />
            <span>{data.likeCount}</span>
          </div>
        </div>
      </Link>
    </li>
  );
}
