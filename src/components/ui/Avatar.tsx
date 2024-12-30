import clsx from "clsx";
import defaultAvatar from "@assets/img/icon/icon_avatar.svg";
import styles from "./Avatar.module.scss";
import { SyntheticEvent } from "react";

interface AvatarProps {
  nickname: string;
  img: string | undefined;
  hover?: boolean;
}

export function Avatar({ nickname, img, hover }: AvatarProps) {
  const avatarImg = img || defaultAvatar;

  function handleError(e: SyntheticEvent<HTMLImageElement>) {
    e.currentTarget.src = defaultAvatar;
  }

  const css = clsx(styles.avatar, hover && styles.hover);

  return (
    <figure className={css}>
      <img src={avatarImg} alt={nickname} onError={handleError} />
    </figure>
  );
}
