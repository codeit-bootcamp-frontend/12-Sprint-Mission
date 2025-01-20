import React from "react";
import Image from "next/image"; // Next.js Image 컴포넌트
import Logo from "./logo";
import styles from "./styles.module.css";
import loginImg from "@/public/assets/img/logo/login.svg"; // 이미지 경로

const Header: React.FC = () => {
  return (
    <header>
      <nav className={styles.header_bar}>
        {/* 로고 컴포넌트 */}
        <Logo />
        <div>
          {/* Next.js Image 컴포넌트 사용 */}
          <Image src={loginImg} alt="Login" width={30} height={30} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
