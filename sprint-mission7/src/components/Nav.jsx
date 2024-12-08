import "./header.css";
import titleLogo from "../assets/panda_face.png";
import userLogo from "../assets/userLogo.png";

function Header() {
  return (
    <div className="headerBar">
      <div className="headerLink">
        <a href="/" className="title">
          <img src={titleLogo} className="titleLogo" alt="판다로고" />
          판다마켓
        </a>
        <a href="/" className="headerSubLink">
          자유게시판
        </a>
        <a href="/" className="headerSubLink">
          중고마켓
        </a>
      </div>
      <a href="/">
        <img src={userLogo} className="userLogo" alt="유저로고" />
      </a>
    </div>
  );
}

export default Header;
