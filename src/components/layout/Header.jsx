import userIcon from "../../assets/images/user.png";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="main-header">
      <div className="nav-container">
        <a href="/">
          <div className="brand-logo" />
        </a>
        <nav className="nav-links">
          <Link to="./pages/items.jsx">자유게시판</Link>
          <Link to="./pages/items.jsx">중고마켓</Link>
        </nav>
      </div>
      <div className="user-profile">
        <img src={userIcon} alt="유저 이미지" />
      </div>
    </header>
  );
}

export default Header;
