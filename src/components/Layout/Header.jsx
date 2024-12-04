import logoImg from "../../images/logo-img.png";
import userInfoImg from "../../images/user-info-img.png";
import "../Layout/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img src={logoImg} alt="로고이미지" />
        <nav>
          <ul>
            <li>
              <a href="#">자유게시판</a>
            </li>
            <li>
              <a href="#">중고마켓</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-right">
        <img className="user-info-img" src={userInfoImg} alt="유저정보이미지" />
      </div>
    </div>
  );
}

export default Header;
