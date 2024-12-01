import pandaFace from './img/logo.svg';
import myPageLogo from './img/myPageLogo.svg';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <div className="divider left"></div>
      <div className="left">
        <div className="logoConatainer">
          <a className="logo" href="/">
            <img className="pandaFace" src={pandaFace} alt="logo"></img>
            <div className="pandaMarket">판다마켓</div>
          </a>
        </div>
        <div className="nav">
          <div>
            <a className="board" href="/board">
              자유게시판
            </a>
          </div>
          <div>
            <a className="items" href="/items">
              중고마켓
            </a>
          </div>
        </div>
      </div>
      <div className="divider center"></div>
      <div className="right">
        <a className="myPageLogo" href="/">
          <img src={myPageLogo} alt="myPageLogo"></img>
        </a>
      </div>
      <div className="divider right"></div>
    </div>
  );
}

export default Header;
