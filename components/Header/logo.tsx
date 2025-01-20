import React, { useEffect, useState } from "react";
import Image from "next/image"; // Next.js의 Image 컴포넌트 사용
import Link from "next/link"; // Next.js의 Link 컴포넌트 사용
import { useRouter } from "next/router"; // Next.js의 useRouter 훅
import logoImg from "@/public/assets/img/logo/logo.png"; // 이미지 경로
import styles from "./styles.module.css"; // 스타일 파일 경로

const Logo: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const router = useRouter(); // 현재 경로 가져오기

  // 각 경로에 있을 때의 스타일을 조건부로 적용
  const isItemsPage = router.pathname === "/items";
  const isBoardPage = router.pathname === "/boards";
  const isAddItemPage = router.pathname === "/additem";
  const isMainPage = router.pathname === "/";
  const isItemsDetailPage = router.pathname.startsWith("/items/");

  useEffect(() => {
    // 창 크기 변경에 따라 상태 업데이트
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // 최초 실행 시 창 크기 확인
    handleResize();

    // resize 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);

    // 컴포넌트 언마운트 시 이벤트 리스너 정리
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.logo}>
      {!isMobile && (
        <Image
          className={styles.header_bar_img}
          src={logoImg}
          alt="판다마켓로고"
          width={100} // 이미지의 너비
          height={50} // 이미지의 높이
        />
      )}
      <h1 className={styles.logo_title}>
        <Link href="/">판다마켓</Link>
      </h1>
      <div className={styles.menu}>
        <Link
          href="/boards"
          className={
            isItemsPage || isAddItemPage || isMainPage || isItemsDetailPage
              ? styles.menuText_default
              : styles.menuText_focus
          }
        >
          자유게시판
        </Link>
        <Link
          href="/items"
          className={
            isBoardPage || isMainPage || isItemsDetailPage
              ? styles.menuText_default
              : styles.menuText_focus
          }
        >
          중고마켓
        </Link>
      </div>
    </div>
  );
};

export default Logo;
