import { Link, useLocation } from 'react-router-dom';
import './GlobalHeader.css'

function GlobalHeader() {

    const location = useLocation();

    return (
        <header className='header'>
            <div className='header__container'>
                <div className='header__inner'>
                    <h1 className='header__logo'>
                        <a href='/' className='header__logo--logo-text'>판다마켓</a>
                    </h1>
                    <ul className='header-nav'>
                        <li className='header-nav--nav-item'>
                            <Link to="FreeBoard" className={location.pathname === '/FreeBoard' ? 'active-page' : ''}>자유게시판</Link>
                        </li>
                        <li className='header-nav--nav-item'>
                            <Link to="items" className={location.pathname === '/items' || '/additem' ? 'active-page' : ''}>중고마켓</Link>
                        </li>
                    </ul>
                </div>
                <a href="/html/login" className="header__login--login-text">로그인</a>
            </div>
        </header>
    )
}

export default GlobalHeader;