import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/app/navi.module.css";
import NavLogoImg from "@/public/assets/images/app/navi/logo.svg";
import profileDefaultImg from "@/public/assets/images/app/navi/profile_default.png";

const menuData = [
  { id: 1, name: "자유게시판", path: "/boards" },
  { id: 2, name: "중고마켓", path: "/items" },
];

function ItemListNav() {
  const router = useRouter();

  return (
    <div className={styles.fixContainer}>
      <nav className={styles.navCover}>
        <div className={styles.pageControl}>
          <Link href="/" prefetch={true}>
            <div className={styles.btnLogo}>
              <NavLogoImg />
              <p className={styles.companyName}>판다마켓</p>
            </div>
          </Link>
          <div className={styles.btnWrap}>
            {menuData.map((menu) => {
              return (
                <Link
                  key={menu.id}
                  href={menu.path}
                  prefetch={true}
                  className={`${styles.btnNavMenu} ${
                    menu.path === router.pathname ? styles.isActive : ""
                  }`}
                >
                  {menu.name}
                </Link>
              );
            })}
          </div>
        </div>
        {/* 사용자 정보를 담은 프로필 또는 아바타이므로 이 기능만 제공해주는 콤포넌트를 분리하는 것도 추후 고려 */}
        <div className={styles.userControl}>
          <div className={styles.circle}>
            <Image src={profileDefaultImg} alt="기본프로필이미지" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default ItemListNav;
