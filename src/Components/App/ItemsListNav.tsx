import { Link, NavLink } from "react-router-dom";
import styles from "../../styles/app/navi.module.css";
import navLogoImg from "../../assets/images/app/navi/logo.svg";
import profileDefaultImg from "../../assets/images/app/navi/profile_default.png";

function getLinkStyle({ isActive }: { isActive: boolean }) {
  return {
    color: isActive ? "#3692ff" : undefined,
  };
}

// 중고마켓 페이지 네비게이션 - /items
function ItemListNav() {
  return (
    <div className={styles.fixContainer}>
      <nav className={styles.navCover}>
        <div className={styles.pageControl}>
          <Link to="/">
            <div className={styles.btnLogo}>
              <img src={navLogoImg} alt="판다마켓" />
              <p className={styles.companyName}>판다마켓</p>
            </div>
          </Link>
          <div className={styles.btnWrap}>
            <NavLink
              to="/board"
              style={getLinkStyle}
              className={styles.btnNavMenu}
            >
              자유게시판
            </NavLink>
            <NavLink
              to="/items"
              style={getLinkStyle}
              className={styles.btnNavMenu}
            >
              중고마켓
            </NavLink>
          </div>
        </div>
        {/* 사용자 정보를 담은 프로필 또는 아바타이므로 이 기능만 제공해주는 콤포넌트를 분리하는 것도 추후 고려 */}
        <div className={styles.userControl}>
          <div className={styles.circle}>
            <img src={profileDefaultImg} alt="기본프로필이미지" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default ItemListNav;
