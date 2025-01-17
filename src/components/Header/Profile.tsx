"use client";

import { Dropdown, Avatar } from "@components/ui";
import { signOut } from "next-auth/react";

interface ProfileProps {
  nickname: string;
  image: string;
}

export function Profile({ nickname, image }: ProfileProps) {
  function handleLogout() {
    if (confirm("정말로 로그아웃 하시겠습니까?")) {
      signOut();
    }
  }

  return (
    <Dropdown>
      <Dropdown.Toggle>
        <Avatar nickname={nickname} img={image} hover />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={handleLogout}>로그아웃</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
