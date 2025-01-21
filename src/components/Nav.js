import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import homeIcon from "../assets/logo.svg";
import profileImg from "../assets/ic_profile.svg";

const NavWrap = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  padding: 0 200px;
  background-color: var(--gray-scale-0);
  @media (max-width: 1199px) {
    padding: 0 24px;
  }
  @media (max-width: 767px) {
    padding: 0 16px;
  }
`;
const LinkToHome = styled.img`
  width: 153px;
`;
const SubMenuWrap = styled.div`
  display: flex;
  width: 100%;
  margin: 0 50px;
  gap: 35px;
  font-size: 18px;
  line-height: 26px;
  color: var(--gray-scale-600);
  font-weight: var(--font-weight-bold);
`;
const LoginButton = styled(NavLink)`
  display: inline-block;
  width: 128px;
  height: 48px;
  background-color: var(--primary-color-100);
  border-radius: 8px;
  color: var(--gray-scale-0);
  text-align: center;
  line-height: 48px;
  font-weight: var(--font-weight-semibold);
  text-decoration: none;

  &:hover {
    background-color: var(--primary-color-200);
  }

  &:active {
    background-color: var(--primary-color-300);
  }
`;
function getLinkStyle({ isActive }) {
  return {
    color: isActive ? "var(--primary-color-100)" : "inherit",
    fontWeight: isActive ? "var(--font-weight-bold)" : "inherit",
  };
}

function Nav() {
  const [isLoggedIn, setIsLOggedIn] = useState(false);

  const handleLogin = () => setIsLOggedIn(true);
  const handleLogout = () => setIsLOggedIn(false);

  const location = useLocation();
  const isItemsActive =
    location.pathname === "/items" || location.pathname === "/additem";

  return (
    <>
      <NavWrap>
        <Link to="/" className="home">
          <LinkToHome src={homeIcon} alt="홈으로" />
        </Link>
        {isLoggedIn ? (
          <>
            <SubMenuWrap className="sub-menu">
              <NavLink to="/boards" style={getLinkStyle}>
                자유게시판
              </NavLink>
              <NavLink to="/items" style={getLinkStyle}>
                중고마켓
              </NavLink>
            </SubMenuWrap>
            <Link to className="btn-mypage">
              <img src={profileImg} alt="프로필" />
            </Link>
          </>
        ) : (
          <LoginButton to="/login">로그인</LoginButton>
        )}
      </NavWrap>
    </>
  );
}

export default Nav;
