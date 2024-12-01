import React from "react";
import Logo from "../images/logo/logo.svg";
import { ReactComponent as LoginIcon } from "../images/icons/ic-loginLogo.svg";
import { Link, NavLink } from "react-router-dom";
import "../styles/Header.css";

function getLinkStyle({ isActive }) {
  return { color: isActive ? "var(--blue)" : undefined };
}

function Header() {
  return (
    <header className="globalHeader">
      <div className="headerLeft">
        <Link to="/home" className="headerLogo" aria-label="홈으로 이동">
          <img src={Logo} alt="판다마켓 로고" width="153" />
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink to="/" style={getLinkStyle}>
                자유게시판
              </NavLink>
            </li>
            <li>
              <NavLink to="/items" style={getLinkStyle}>
                중고마켓
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Link to="/login" className="loginLink" aria-label="로그인">
        <LoginIcon width="40" height="40" />
      </Link>
    </header>
  );
}

export default Header;
