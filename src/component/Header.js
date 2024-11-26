import Logo from "../asset/판다 얼굴.png";
import UserImg from "../asset/userIcon.png";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <a href="#!" className="header__logo">
          <img className="header__logo-img" src={Logo} alt="판다마켓 로고" />
          <span className="header__logo-title">판다마켓</span>
        </a>
        <div className="header__Link-container">
          <a href="#!" className="header__Link-title">
            자유게시판
          </a>
          <a href="#!" className="header__Link-title">
            중고마켓
          </a>
        </div>
        <img className="header__profile-img" src={UserImg} alt="유저 이미지" />
      </div>
    </header>
  );
}

export default Header;
