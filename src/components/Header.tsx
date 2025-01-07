import React from "react";
import { Link, useLocation } from "react-router-dom";
import LogoSymbol from "../assets/logo/symbol-logo.svg";
import LogoText from "../assets/logo/text-logo.svg";
import ProfileIcon from "../assets/icons/ic-profile.svg";
import "./Header.css";

const Header: React.FC = () => {
  const location = useLocation();
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
              <Link to="/communityFeed">자유게시판</Link>
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
};

export default Header;
