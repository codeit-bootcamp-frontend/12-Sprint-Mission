import { Link } from "react-router-dom";
import style from "./Footer.module.css"
import Container from "../Container";

export default function Footer() {

  return (
    <footer id={style.footer}>
      <Container>
        <div className={style.footer}>

          <span className={style.text}>
            ©codeit - 2024
          </span>

          <ul className={style.footerLink}>
            <li>
              <Link to={"/privacy"}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to={"/faq"}>
                FAQ
              </Link>
            </li>
          </ul>

          <ul className={style.snsLink}>
            <li>
              <Link to={"https://www.facebook.com/"} className={style.faceBook}>
                <span className="blind">페이스북</span>
              </Link>
            </li>
            <li>
              <Link to={"https://x.com/"} className={style.twitter}>
                <span className="blind">트위터</span>
              </Link>
            </li>
            <li>
              <Link to={"https://www.youtube.com/"} className={style.youtube}>
                <span className="blind">유튜브</span>
              </Link>
            </li>
            <li>
              <Link to={"https://www.instagram.com/"} className={style.insta}>
                <span className="blind">유튜브</span>
              </Link>
            </li>
          </ul>

        </div>
      </Container>
    </footer >

  )

}