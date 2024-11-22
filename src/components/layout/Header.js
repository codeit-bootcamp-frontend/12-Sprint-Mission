import { useMediaQuery } from "@mui/material";
import { ReactComponent as Logo } from "../../assets/images/logo/logo.svg";
import { ReactComponent as TextLogo } from "../../assets/images/logo/logo-text.svg";
import { ReactComponent as User } from "../../assets/images/icons/ic_user.svg";
import "./Header.css";

function Header() {
  const ResponsiveIcon = () => {
    const isMobile = useMediaQuery("(max-width:600px)");

    return isMobile ? <TextLogo /> : <Logo />;
  };

  return (
    <header class="header">
      <div className="header-left">
        <a href="/">
          <Logo width="153" height="70" />
        </a>
        <nav>
          <ul>
            <li>
              <a src="#">자유게시판</a>
            </li>
            <li className="active">
              <a src="#">중고마켓</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-right">
        <User />
      </div>
    </header>
  );
}

export default Header;
