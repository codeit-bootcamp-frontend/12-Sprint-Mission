import Link from "next/link";
import Image from "next/image";

import Logo from "@/assets/images/logo.svg";
import Profile from "@/assets/images/profile.svg";
import style from "./Header.module.css";

export default function Header() {
  return (
    <header className={style.container}>
      <div className={style.header_nav}>
        <Link href={"/items"} className={style.header_logo_link}>
          <Image src={Logo} alt="판다마켓 로고" width={153} height={51} className={style.header_logo} />
        </Link>
        <div>
          <Link href={"/boards"}>자유게시판</Link>
          <Link href={"/items"}>중고마켓</Link>
        </div>
      </div>
      <Image src={Profile} alt="프로필" width={40} height={40} className={style.header_profile} />
    </header>
  );
}
