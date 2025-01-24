import logoImage from "../assets/logo.png";
import profileImage from "../assets/profile_icon.png";
import "./NavBar.css";

function NavBar() {
  return (
    <header>
      <div className="nav">
        <div className="nav-left">
          <a href="/index.html" className="main-page">
            <img src={logoImage} alt="로고 이미지" />
          </a>
          <a href="http://www.naver.com">
            <p>자유게시판</p>
          </a>
          <a href="http://www.naver.com">
            <p>중고마켓</p>
          </a>
        </div>
        <div className="nav-right">
          <img src={profileImage} alt="프로필 아이콘" />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
