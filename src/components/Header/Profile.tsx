import { Dropdown, Avatar } from "@components/ui";
import { User } from "@type/auth";

interface ProfileProps {
  user: User;
  onLogout: () => void;
}

export function Profile({ user, onLogout }: ProfileProps) {
  function handleLogout() {
    if (confirm("정말로 로그아웃 하시겠습니까?")) {
      onLogout();
    }
  }

  return (
    <Dropdown>
      <Dropdown.Toggle>
        <Avatar nickname={user.nickname} img={user.image} hover />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={handleLogout}>로그아웃</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
