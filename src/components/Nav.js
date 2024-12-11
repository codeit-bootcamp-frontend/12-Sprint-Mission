import logoImg from "../img/logoImg.png";
import profileImg from "../img/profile.png";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.navLeft}>
          <a href="https://panda-market-second-hands.netlify.app/">
            <img className={styles.logoImg} src={logoImg} alt="판다마켓 로고" />
          </a>
          <ul className={styles.menu}>
            <li>자유게시판</li>
            <li>중고마켓</li>
          </ul>
        </div>
        <img
          className={styles.profileImg}
          src={profileImg}
          alt="프로필 이미지"
        />
      </div>
    </div>
  );
}

export default Nav;
