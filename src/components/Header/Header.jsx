import React from "react";
import PandaImg from "../../img/pandaLogo__header.png";
import UserImg from "../../img/userImg.png";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-nav__container">
        <div className="header-nav">
          <div className="logo__container">
            <img src={PandaImg} alt="판다 로고 이미지" className="logo__img" />
            <p className="logo__text">판다마켓</p>
          </div>
          <div className="header-menu__container">
            <p className="header-menu__text">자유게시판</p>
            <p className="header-menu__text">중고마켓</p>
          </div>
        </div>
        <img src={UserImg} alt="사용자 이미지" />
      </div>
    </header>
  );
}
