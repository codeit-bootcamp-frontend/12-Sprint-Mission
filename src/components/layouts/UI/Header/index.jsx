import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../../../assets/images/logo.png';
import styles from './index.module.css';
import { useEffect, useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [itemsActiveTab, setItemsActiveTab] = useState('');
  const [communityActiveTab, setCommunityActiveTab] = useState('');

  const onClickMenu = (menu) => {
    if (menu === 'home') navigate('/');
    else navigate(`/${menu}`);
  };

  useEffect(() => {
    if (pathname === '/items') setItemsActiveTab('blue');
    else if (pathname === '/community') setCommunityActiveTab('blue');
  }, [pathname]);

  return (
    <header className={styles['top-navigation']}>
      <div className={styles['header-left']}>
        <img
          src={Logo}
          alt="로고이미지 입니다."
          className={styles['logo']}
          onClick={() => onClickMenu('home')}
        />
        <span
          style={{ color: communityActiveTab }}
          className={styles['community-tab']}
          onClick={() => onClickMenu('community')}
        >
          자유게시판
        </span>
        <span
          style={{ color: itemsActiveTab }}
          className={styles['items-tab']}
          onClick={() => onClickMenu('items')}
        >
          중고마켓
        </span>
      </div>

      <button className={styles['login']} onClick={() => onClickMenu('login')}>
        로그인
      </button>
    </header>
  );
};

export default Header;
