import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo-img.png";
import userInfoImg from "../../assets/images/user-info-img.png";
import "../Layout/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <Link to="/">
          <img className="logo" src={logoImg} alt="로고이미지" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="#">자유게시판</Link>
            </li>
            <li>
              <Link to="#">중고마켓</Link>
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
