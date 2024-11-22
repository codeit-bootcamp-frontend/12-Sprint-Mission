import defaultAvatar from "@assets/img/icon/icon_avatar.svg";
import styles from "./styles.module.scss";

export default function Avatar({ nickname, img }) {
  const avatarImg = img || defaultAvatar;
  return (
    <figure className={styles.avatar}>
      <img src={avatarImg} alt={nickname} />
    </figure>
  );
}
