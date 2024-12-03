import { Avatar } from "@components/ui";
import { toDate } from "@util/formatter";
import styles from "./Author.module.scss";

export function Author({ avatar, nickname, createAt }) {
  return (
    <div className={styles.author}>
      <Avatar img={avatar} nickname={nickname} />
      <div className={styles.info}>
        <div className={styles.nickname}>{nickname}</div>
        <time className={styles.date}>{toDate(createAt)}</time>
      </div>
    </div>
  );
}
