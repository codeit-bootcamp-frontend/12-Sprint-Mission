import '../../style/global.css';
import './Header.css';
import logo from '../../images/panda-market-logo.png';
import profile from '../../images/profile.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="headerLeft">
        <div className="logo">
          <img src={logo} alt="로고 이미지" className="logoImg" />
          판다마켓
        </div>
        <nav>
          <div className="navMenu">자유게시판</div>
          <Link to="/items">
            <div className="navMenu">중고마켓</div>
          </Link>
        </nav>
      </div>
      <img src={profile} alt="프로필 이미지" className="profileImg" />
    </header>
  );
}

export default Header;
