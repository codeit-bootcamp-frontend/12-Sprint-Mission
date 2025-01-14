import { Avatar, Date } from "@components/ui";
import styles from "./Author.module.scss";
import clsx from "clsx";

interface AuthorProps {
  avatar?: string;
  nickname: string;
  updatedAt: string;
  dir?: "col" | "row";
  mini?: boolean;
}

export function Author({
  avatar,
  nickname,
  updatedAt,
  dir = "col",
  mini = false,
}: AuthorProps) {
  return (
    <div className={clsx(styles.author, styles[dir])}>
      {!mini && <Avatar img={avatar} nickname={nickname} />}
      <div className={styles.info}>
        <div className={styles.nickname}>{nickname}</div>
        {!mini && <Date date={updatedAt} />}
      </div>
    </div>
  );
}
