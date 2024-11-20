import defaultAvatar from "@assets/img/icon/icon_avatar.svg";
import Dropdown from "@components/Dropdown";
import styles from "./styles.module.scss";

export default function Profile({ user, onLogout }) {
  function handleLogout() {
    if (confirm("정말로 로그아웃 하시겠습니까?")) {
      onLogout();
    }
  }

  const avatarImg = user.image || defaultAvatar;

  return (
    <Dropdown>
      <Dropdown.Toggle>
        <figure className={styles.avatar}>
          <img src={avatarImg} alt={user.nickname} />
        </figure>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={handleLogout}>로그아웃</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
