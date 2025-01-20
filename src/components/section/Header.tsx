import { Link, useLocation } from "react-router-dom";
import style from "./Header.module.css"
import Container from "../Container";

export default function Header() {

  const location = useLocation();

  return (

    <header id={style.header}>
      <Container>
        <div className={style.header}>
          <div className={style.logo}>
            <h1>
              <Link to="/">
                <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="판다마켓" />
              </Link>
            </h1>
          </div>

          <nav>
            <ul className={style.depth01}>
              <li>
                <h2>
                  <Link className={location.pathname === '/notive' ? `${style.active}` : ''} to={'/notice'}>자유게시판</Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link className={location.pathname === '/items' ? `${style.active}` : ''} to={'/items'}>중고마켓</Link>
                </h2>
              </li>
            </ul>
          </nav>

          <div className={style.loginBox}>
            <Link className={style.login} to="/signin">
              <span className="blind">사용자</span>
            </Link>
          </div>
        </div>
      </Container>
    </header>

  )

}