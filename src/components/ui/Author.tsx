import { Avatar } from "@components/ui";
import { toDate } from "@util/formatter";
import styles from "./Author.module.scss";

interface AuthorProps {
  avatar: string;
  nickname: string;
  updatedAt: string;
}

export function Author({ avatar, nickname, updatedAt }: AuthorProps) {
  return (
    <div className={styles.author}>
      <Avatar img={avatar} nickname={nickname} />
      <div className={styles.info}>
        <div className={styles.nickname}>{nickname}</div>
        <time className={styles.date}>{toDate(updatedAt)}</time>
      </div>
    </div>
  );
}
