import { SyntheticEvent } from "react";
import Image from "next/image";
import clsx from "clsx";
import defaultAvatar from "@assets/img/icon/icon_avatar.svg";
import styles from "./Avatar.module.scss";

interface AvatarProps {
  img?: string;
  nickname: string;
  hover?: boolean;
  className?: string;
}

export function Avatar({ nickname, img, hover, className }: AvatarProps) {
  const avatarImg = img || defaultAvatar;

  function handleError(e: SyntheticEvent<HTMLImageElement>) {
    e.currentTarget.src = defaultAvatar;
  }

  const css = clsx(styles.avatar, hover && styles.hover, className);

  return (
    <figure className={css}>
      <Image src={avatarImg} alt={nickname} onError={handleError} fill />
    </figure>
  );
}
