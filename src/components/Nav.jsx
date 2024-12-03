import React from "react";
import { Link } from "react-router-dom";
import PandaLogo from "../asset/logo/logo.png";
import Profile from "../asset/icon/ic_profile.png";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <div className="menu">
        <Link to="/">
          <img src={PandaLogo} alt="판다로고" />
        </Link>

        <div>
          <Link to="/">자유게시판</Link>
        </div>
        <div>
          <Link to="/">중고마켓</Link>
        </div>
      </div>
      <Link to="/" className="profile_ic">
        <img src={Profile} alt="프로필" />
      </Link>
    </nav>
  );
}

export default Nav;
