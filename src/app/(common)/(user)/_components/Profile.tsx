"use client";

import { Avatar, Button } from "@/components/ui";
import styles from "./Profile.module.scss";
import dayjs from "dayjs";
import Link from "next/link";

export default function Profile({
  nickname,
  image,
  createdAt,
}: {
  nickname: string;
  image: string;
  createdAt: string;
}) {
  return (
    <div className={styles.profile}>
      <div className={styles.pic}>
        <Avatar nickname={nickname} img={image} />
      </div>
      <div className={styles.info}>
        <h2 className={styles.name}>{nickname}</h2>
        <div className={styles.date}>
          가입일 : {dayjs(createdAt).format("YYYY-MM-DD")}
        </div>
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
