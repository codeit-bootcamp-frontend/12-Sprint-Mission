import Logo from "../../asset/panda.png";
import UserImg from "../../asset/userIcon.png";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headercontainer}>
        <a href="#!" className={styles.header__logo}>
          <img
            className={styles.header__logoimg}
            src={Logo}
            alt="판다마켓 로고"
          />
          <span className={styles.header__logotitle}>판다마켓</span>
        </a>
        <div className={styles.header__Linkcontainer}>
          <Link to="/items" className={styles.header__Linktitle}>
            자유게시판
          </Link>
          <Link to="/items" className={styles.header__Linktitle}>
            중고마켓
          </Link>
        </div>
        <img
          className="styles.header__profileimg"
          src={UserImg}
          alt="유저 이미지"
        />
      </div>
    </header>
  );
}

export default Header;
