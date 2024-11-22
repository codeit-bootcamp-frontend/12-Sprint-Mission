import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const navigate = useNavigate();
  const { pathname: pathName } = useLocation();

  const onClickMenu = (menu) => {
    switch (menu) {
      case 'home':
        navigate('/');
        break;
      case 'login':
        navigate('/login');
        break;
      case 'items':
        navigate('/items');
        break;
      case 'community':
        navigate('/community');
        break;
    }
  };

  useEffect(() => {
    setActiveMenu(
      pathName.replace('/', '') === '' ? 'home' : pathName.replace('/', '')
    );
  }, []);

  return (
    <header>
      <img
        src={Logo}
        alt="로고이미지 입니다."
        onClick={() => onClickMenu('home')}
      />
      <span onClick={() => onClickMenu('community')}>자유게시판</span>
      <span onClick={() => onClickMenu('items')}>중고마켓</span>
      <button onClick={() => onClickMenu('login')}>로그인</button>
    </header>
  );
};

export default Header;
