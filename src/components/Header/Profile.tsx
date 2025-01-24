"use client";

import { Dropdown, Avatar } from "@components/ui";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

interface ProfileProps {
  nickname: string;
  image: string;
}

export function Profile({ nickname, image }: ProfileProps) {
  const router = useRouter();

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
        <Dropdown.Item onClick={() => router.push("/mypage")}>
          내정보
        </Dropdown.Item>
        <Dropdown.Item onClick={handleLogout}>로그아웃</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
