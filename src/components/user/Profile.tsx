"use client";

import { Avatar, Button } from "@/components/ui";
import styles from "./Profile.module.scss";
import { toDate } from "@/util/formatter";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getUserOptions } from "@/service/user.queries";

export default function Profile() {
  const {
    data: { nickname, image, createdAt },
  } = useSuspenseQuery(getUserOptions);

  return (
    <div className={styles.profile}>
      <Avatar nickname={nickname} img={image} className={styles.pic} />
      <div className={styles.info}>
        <h2 className={styles.name}>{nickname}</h2>
        <div className={styles.date}>가입일 : {toDate(createdAt)}</div>
      </div>
      <ul className={styles.menu}>
        <li>
          <Button href="/editProfile">프로필 변경</Button>
        </li>
        <li>
          <Button variant="outlined" href="/changePassword">
            비밀번호 변경
          </Button>
        </li>
      </ul>
    </div>
  );
}
