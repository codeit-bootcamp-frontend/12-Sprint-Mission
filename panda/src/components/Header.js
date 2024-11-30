import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../icon/pandalogo.svg";
import profile from "../icon/profile.png";

function Header() {
  return (
    <header className="header">
      <div className="headerContainer">
        <div className="headerLogo">
          <Link to="/">
            <img src={logo} alt="logo" className="hLogo" />
          </Link>
        </div>

        <nav className="nav">
          <Link to="/board" className="navBoard">
            <p className="navBoardText"> 자유게시판 </p>
          </Link>
          <Link to="/items" className="navMarket">
            중고마켓
          </Link>
        </nav>

        <div className="profile">
          <Link to="/profile">
            <img src={profile} alt="logo" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
