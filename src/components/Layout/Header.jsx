import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo/logo.svg";
import Profile from "../../assets/images/icons/ic_profile.svg";
import "./Header.css";

function getLinkStyle({ isActive }) {
  return { color: isActive ? "var(--primary-100)" : undefined };
}

function Header() {
  const location = useLocation();

  return (
    <header className="globalHeader">
      <div className="headerWrapper">
        <div className="headerLeft">
          <Link to="/" className="headerLogo" aria-label="홈으로 이동">
            <img src={Logo} alt="판다마켓 로고" width="153" />
          </Link>

          <nav>
            <ul>
              <li>
                <NavLink to="/community" style={getLinkStyle}>
                  자유게시판
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/items"
                  style={({ isActive }) =>
                    location.pathname === "/additem" || isActive
                      ? { color: "var(--primary-100)" }
                      : {}
                  }
                >
                  중고마켓
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <img src={Profile} alt="프로필" width="40" />
      </div>
    </header>
  );
}

export default Header;
