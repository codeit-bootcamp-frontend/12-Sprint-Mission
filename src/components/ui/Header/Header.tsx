import "./Header.css";
import logo from "../../../assets/images/logo.svg";
import profile from "../../../assets/images/profile.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-nav">
        <Link to="/items" className="header-logo-link">
          <img src={logo} alt="로고" className="header-logo" />
        </Link>
        <div className="header-nav-links">
          <Link>자유게시판</Link>
          <Link to="/items">중고마켓</Link>
        </div>
      </div>
      <img src={profile} alt="" className="header-profile" />
    </header>
  );
}

export default Header;
