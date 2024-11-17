import defaultAvatar from "../../assets/img/icon/icon_avatar.svg";
import styles from "./styles.module.scss";

export default function Profile({ user, onLogout }) {
  function handleLogout() {
    if (confirm("정말로 로그아웃 하시겠습니까?")) {
      onLogout();
    }
  }

  const avatarImg = user.image || defaultAvatar;

  return (
    <button className={styles.avatar} onClick={handleLogout}>
      <img src={avatarImg} alt={user.nickname} />
    </button>
  );
}
