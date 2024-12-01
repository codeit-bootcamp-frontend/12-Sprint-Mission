import pandaFace from './img/pandaFace.svg';
import myPageLogo from './img/myPageLogo.svg';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <div className="divider"></div>
      <div className="left">
        <a className="logo" href="/">
          <img className="pandaFace" src={pandaFace} alt="logo"></img>
          <div className="pandaMarket">판다마켓</div>
        </a>
        <div className="nav">
          <a className="board" href="/board">
            자유게시판
          </a>
          <a className="items" href="/items">
            중고마켓
          </a>
        </div>
      </div>
      <div className="divider center"></div>
      <div className="right">
        <a className="myPageLogo" href="/">
          <img src={myPageLogo} alt="myPageLogo"></img>
        </a>
      </div>
      <div className="divider"></div>
    </div>
  );
}

export default Header;
