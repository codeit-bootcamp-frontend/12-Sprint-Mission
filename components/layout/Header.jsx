import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/styles/Header.module.css";
import Logo from "@/public/logo/logo.svg";
import profile from "@/public/icons/ic_profile.png";

function getLinkStyle(path, currentPath) {
  return path === currentPath ? { color: "var(--blue)" } : {};
}

function Header() {
  const router = useRouter();

  return (
    <header className={styles.globalHeader}>
      <div className={styles.headerLeft}>
        <Link href="/" className={styles.headerLogo}>
          <Image src={Logo} alt="판다마켓 로고" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link
                style={getLinkStyle("/boards", router.pathname)}
                href="/boards"
              >
                자유게시판
              </Link>
            </li>
            <li>
              <Link
                style={
                  router.pathname === "/additem" || router.pathname === "/items"
                    ? { color: "var(--blue)" }
                    : {}
                }
                href="/items"
              >
                중고마켓
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Image src={profile} alt="profile" width={40} height={40} />
    </header>
  );
}

export default Header;
