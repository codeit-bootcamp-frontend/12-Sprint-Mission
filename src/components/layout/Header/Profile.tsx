"use client";

import { Dropdown, Avatar } from "@components/ui";
import { signOut } from "next-auth/react";
import Link from "next/link";
interface ProfileProps {
  nickname: string;
  image: string;
}

export function Profile({ nickname, image }: ProfileProps) {
  async function handleLogout() {
    if (confirm("정말로 로그아웃 하시겠습니까?")) {
      // 기본 signOut의 locatio href의 행동을 통해
      // 각종 캐시(리액트쿼리, 세션등을 초기) 초기화.
      signOut();
    }
  }

  return (
    <Dropdown>
      <Dropdown.Toggle>
        <Avatar nickname={nickname} img={image} hover />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item asChild>
          <Link href="/mypage">내정보</Link>
        </Dropdown.Item>
        <Dropdown.Item onClick={handleLogout}>로그아웃</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
