import Dropdown from "@components/Dropdown";
import Avatar from "@components/Avatar";

export default function Profile({ user, onLogout }) {
  function handleLogout() {
    if (confirm("정말로 로그아웃 하시겠습니까?")) {
      onLogout();
    }
  }

  return (
    <Dropdown>
      <Dropdown.Toggle>
        <button type="button">
          <Avatar nickname={user.nickname} img={user.image} />
        </button>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={handleLogout}>로그아웃</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
