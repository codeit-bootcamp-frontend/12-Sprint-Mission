import { useMediaQuery } from "react-responsive";
import { NavLink, useLocation } from "react-router-dom";
import logo from "./../assets/logo.svg";
import logoM from "./../assets/logo_m.svg";
import mypage from "./../assets/mypage_btn.svg";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <div className="header">
      <div className="inner">
        <div className="logo">
          <a href="/">{isMobile ? <img src={logoM} alt="판다마켓 로고" /> : <img src={logo} alt="판다마켓 로고" />}</a>
        </div>
        <nav className="menu">
          <ul className="menu_list">
            <li>
              <NavLink to="/freeboard" className={({ isActive }) => (isActive ? "active" : "")}>
                자유게시판
              </NavLink>
            </li>
            <li>
              <NavLink to="/items" className={() => (location.pathname === "/items" || location.pathname === "/additem" ? "active" : "")}>
                중고마켓
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="mypage">
          <a href="">
            <img src={mypage} alt="마이페이지" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
