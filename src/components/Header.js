import React from "react";
import { Link } from "react-router-dom";
import LogoSymbol from "../assets/logo-symbol.svg";
import LogoText from "../assets/logo-text.svg";
import ProfileIcon from "../assets/profile-icon.svg";
import "./Header.css";

function Header() {
  return (
    <header className="itemsHeader">
      <div className="headerLeft">
        <Link to="/" className="headerLogo">
          <img
            src={LogoSymbol}
            alt="판다마켓 심볼 로고"
            className="logoSymbol"
          />
          <img src={LogoText} alt="판다마켓 로고" className="logoText" />
        </Link>

        <nav>
          <ul>
            <li>
              <Link to="/community">자유게시판</Link>
            </li>
            <li>
              <Link to="/items">중고마켓</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="headerProfile">
        <img src={ProfileIcon} alt="마이 페이지" />
      </div>
    </header>
  );
}

export default Header;
