import { Avatar } from "@components/ui";
import { toDate } from "@util/formatter";
import styles from "./Author.module.scss";

export function Author({ avatar, nickname, updateAt }) {
  return (
    <div className={styles.author}>
      <Avatar img={avatar} nickname={nickname} />
      <div className={styles.info}>
        <div className={styles.nickname}>{nickname}</div>
        <time className={styles.date}>{toDate(updateAt)}</time>
      </div>
    </div>
  );
}
