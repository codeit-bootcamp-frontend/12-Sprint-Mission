import clsx from "clsx";
import defaultAvatar from "@assets/img/icon/icon_avatar.svg";
import styles from "./Avatar.module.scss";

export function Avatar({ nickname, img, hover }) {
  const avatarImg = img || defaultAvatar;

  function handleError(e) {
    e.target.src = defaultAvatar;
  }

  const css = clsx(styles.avatar, hover && styles.hover);

  return (
    <figure className={css}>
      <img src={avatarImg} alt={nickname} onError={handleError} />
    </figure>
  );
}
