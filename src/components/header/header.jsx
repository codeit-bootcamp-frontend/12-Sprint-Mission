import React from 'react';
import logo from '../../assets/images/logo/logo.svg';
import { Link } from 'react-router-dom';
import style from './header.module.css';

function Header() {
  return (
    <div className={style.main}>
      <header className={style.container}>
        <div className={style.navbuttons}>
          <Link to="/">
            <img src={logo} alt="panda_logo" />
          </Link>
          <div >
            <Link
            className={style.navbuttonspages}
             to="/communityboard">자유게시판</Link>
            <Link 
            className={style.navbuttonspages}
            to="/thriftmarket">중고마켓</Link>
          </div>
        </div>
        <div>
          <Link to="/login">
            <img />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
