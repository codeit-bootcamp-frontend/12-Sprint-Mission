import { ReactComponent as Logo } from "../../assets/images/logo/logo.svg";
import { ReactComponent as User } from "../../assets/images/icons/ic_user.svg";
import "./Header.css";

function Header() {
  return (
    <header>
      <a href="/">
        <Logo width="153" />
      </a>
      <nav>
        <ul>
          <li>
            <a src="#">자유게시판</a>
          </li>
          <li>
            <a src="#">중고마켓</a>
          </li>
        </ul>
      </nav>
      <div>
        <User />
      </div>
    </header>
  );
}

export default Header;
