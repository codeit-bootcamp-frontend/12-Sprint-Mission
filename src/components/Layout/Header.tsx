import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import Logo from "@/assets/images/logo/logo.svg";
import Profile from "@/assets/images/icons/ic_profile.svg";

const GlobalHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  width: 100%;
  height: var(--header-height);
  background-color: var(--color-white);
  border-bottom: 0.1rem solid var(--color-grey);
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 112rem;
  margin: 0 auto;
  background-color: var(--color-white);
  border-bottom: 0.1rem solid var(--color-grey);

  @media (max-width: 1199px) {
    padding: 0 5rem;
  }

  @media (max-width: 767px) {
    padding: 0 2rem;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderLogo = styled(Link)`
  margin-right: 4.7rem;

  @media (max-width: 1199px) {
    margin-right: 3.5rem;
  }

  @media (max-width: 767px) {
    margin-right: 0.8rem;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 3rem;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.6rem;
  color: var(--secondary-600);

  @media (max-width: 767px) {
    gap: 0.8rem;
  }
`;

const NavItem = styled.li``;

const NavLinkStyled = styled(NavLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: var(--primary-100);
  }
`;

function getLinkStyle({ isActive }: { isActive: boolean }) {
  return { color: isActive ? "var(--primary-100)" : undefined };
}

function Header() {
  const location = useLocation();

  return (
    <GlobalHeader>
      <HeaderWrapper>
        <HeaderLeft>
          <HeaderLogo to="/" aria-label="홈으로 이동">
            <img src={Logo} alt="판다마켓 로고" width="153" />
          </HeaderLogo>

          <nav>
            <NavList>
              <NavItem>
                <NavLinkStyled to="/community" style={getLinkStyle}>
                  자유게시판
                </NavLinkStyled>
              </NavItem>
              <NavItem>
                <NavLinkStyled
                  to="/items"
                  style={({ isActive }) =>
                    location.pathname === "/additem" || isActive
                      ? { color: "var(--primary-100)" }
                      : {}
                  }
                >
                  중고마켓
                </NavLinkStyled>
              </NavItem>
            </NavList>
          </nav>
        </HeaderLeft>

        <img src={Profile} alt="프로필" width="40" />
      </HeaderWrapper>
    </GlobalHeader>
  );
}

export default Header;
