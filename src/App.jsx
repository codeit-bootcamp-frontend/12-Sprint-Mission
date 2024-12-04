import React, { useEffect, useState } from "react";
import logo from "./ImgFile/logo.svg";
import mypage from "./ImgFile/mypage_btn.svg";
import "./App.css";
import BestItem from "./component/BestItem";
import AllItem from "./component/AllItem";
import defaultImage from "./ImgFile/item.png";

function App() {
  const [itemList, setItemList] = useState();

  const [pageSize, setPageSize] = useState(10);
  const [orderBy, setOrderBy] = useState("recent");

  useEffect(() => {
    fetch(
      `https://panda-market-api.vercel.app/products?page=1&pageSize=${pageSize}&orderBy=${orderBy}`
    )
      .then((res) => res.json())
      .then((data) => {
        setItemList(data);
      });
  }, [orderBy, pageSize]);

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
          <div>
            <h2>베스트 상품</h2>
            <div className="item-list-seet">
              {itemList &&
                [...itemList.list]
                  .sort((a, b) => b.favoriteCount - a.favoriteCount)

                  .map((item) => {
                    const imageUrl = item.images[0] || defaultImage;
                    return (
                      <BestList
                        key={item.id}
                        imageUrl={imageUrl}
                        title={item.name}
                        price={item.price}
                        likeCount={item.favoriteCount}
                        size={282}
                      />
                    );
                  })}
            </div>
          </div>
          <div>
            <div className="Allproduct-list">
              <h3>전체 상품</h3>

              <select
                onChange={(e) => {
                  setOrderBy(e.target.value);
                }}
              >
                <option value="recent">최신순</option>
                <option value="favorite">좋아요순</option>
              </select>
            </div>
            <div className="item-list-seeter">
              {itemList?.list.map((item) => {
                const imageUrl = item.images[0] || defaultImage;
                return (
                  <AllList
                    key={item.id}
                    imageUrl={imageUrl}
                    title={item.name}
                    price={item.price}
                    likeCount={item.favoriteCount}
                    size={221}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;