import logo from "./ImgFile/logo.svg";
import mypage from "./ImgFile/mypage_btn.svg";
import "./App.css";
import BestList from "./component/BestList";
import AllList from "./component/AllList";
import defaultImage from "./ImgFile/item.png";

function App() {
  return (
    <div>
      <header>
        <div className="headTitle">
          <h1>
            <img src={logo} alt="타이틀" />
          </h1>
          <div>
            <a> 자유게시판 </a>
          </div>
          <div>
            <a> 중고마켓 </a>
          </div>
          <img src={mypage} alt="아이콘" />
        </div>
        <div className="item-list">
          <BestList />
          <div>
            <div className="Allproduct-list">
              <h3>전체 상품</h3>
            </div>
            <div className="item-list-seeter"></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
