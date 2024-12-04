import userIcon from "../../assets/images/user.png";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
function Header() {
  const location = useLocation();
  return (
    <header className="main-header">
      <div className="nav-container">
        <a href="/">
          <div className="brand-logo" />
        </a>
        <nav className="nav-links">
          <Link to="./">자유게시판</Link>
          <Link
            to="./items"
            style={{
              borderBottom:
                location.pathname === "/items" ? "2px solid #3692ff" : "none",
            }}
          >
            중고마켓
          </Link>
        </nav>
      </div>
      <div className="user-profile">
        <img src={userIcon} alt="유저 이미지" />
      </div>
    </header>
  );
}

export default Header;
