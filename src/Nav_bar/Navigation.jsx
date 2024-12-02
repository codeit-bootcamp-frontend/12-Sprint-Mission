import React from "react";
import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? "#3692ff" : "#4b5563",
  };
}

function Header() {
  return (
    <header className="nav">
      <div className="nav-container">
        <Link to="/">
          <img
            id="nav-logo"
            src="/images/home/panda_logo.png"
            alt="판다마켓 홈"
          />
        </Link>

        <ul className="nav-container__list">
          <li>
            <NavLink to="/noticeboard" style={getLinkStyle}>
              자유게시판
            </NavLink>
          </li>
          <li>
            <NavLink to="/items" style={getLinkStyle}>
              중고마켓
            </NavLink>
          </li>
        </ul>
      </div>
      <img id="nav-profile" src="/images/home/profile.png" alt="프로필" />
    </header>
  );
}

export default Header;
