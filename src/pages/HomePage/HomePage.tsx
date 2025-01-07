import React from "react";
import { Link } from "react-router-dom";
import logoSymbol from "../../assets/logo/symbol-logo.svg";
import logoText from "../../assets/logo/text-logo.svg";
import bannerImg from "../../assets/home/banner.svg";
import feature1Img from "../../assets/home/hot-item.svg";
import feature2Img from "../../assets/home/search.svg";
import feature3Img from "../../assets/home/register.svg";
import btpandaImg from "../../assets/home/btpanda.svg";
import facebookLogo from "../../assets/social/facebook-logo.svg";
import twitterLogo from "../../assets/social/twitter-logo.svg";
import youtubeLogo from "../../assets/social/youtube-logo.svg";
import instagramLogo from "../../assets/social/instagram-logo.svg";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <>
      {/* 헤더 영역 */}
      <div className="header-home">
        <div className="top">
          <div className="logo">
            <a href="/">
              <img className="logo-symbol" src={logoSymbol} alt="로고 이미지" />
              <img className="logo-text" src={logoText} alt="로고 텍스트" />
            </a>
          </div>
          <div className="login">
            <Link to="/login">로그인</Link>
          </div>
        </div>
      </div>

      {/* 배너 영역 */}
      <div className="main-banner">
        <div className="banner">
          <div className="banner-title">
            일상의 모든 물건을 <span>거래해 보세요</span>
          </div>
          <div className="shortcut">
            <Link to="/items">구경하러 가기</Link>
          </div>
          <img src={bannerImg} alt="메인 배너 판다 이미지" />
        </div>
      </div>

      {/* 콘텐츠 영역 */}
      <div className="contents">
        {/* Hot item */}
        <div className="con">
          <div className="hot-item">
            <img src={feature1Img} alt="콘텐츠 인기 상품 이미지" />
            <div className="text">
              <span>Hot item</span>
              <div className="text-title">
                인기 상품을
                <span>확인해 보세요</span>
              </div>
              <p>
                가장 HOT한 중고거래 물품을
                <br />
                판다 마켓에서 확인해 보세요
              </p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="con">
          <div className="search">
            <img src={feature2Img} alt="콘텐츠 검색 이미지" />
            <div className="text">
              <span>Search</span>
              <div className="text-title">
                구매를 원하는
                <span>상품을 검색하세요</span>
              </div>
              <p>
                구매하고 싶은 물품은 검색해서
                <br />
                쉽게 찾아보세요
              </p>
            </div>
          </div>
        </div>

        {/* Register */}
        <div className="con">
          <div className="register">
            <img src={feature3Img} alt="콘텐츠 상품 등록 이미지" />
            <div className="text">
              <span>Register</span>
              <div className="text-title">
                판매를 원하는
                <span>상품을 등록하세요</span>
              </div>
              <p>
                어떤 물건이든 판매하고 싶은 상품을
                <br />
                쉽게 등록하세요
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 영역 */}
      <div className="bottom">
        <div className="btpanda">
          <p>
            믿을 수 있는
            <br />
            판다마켓 중고 거래
          </p>
          <img src={btpandaImg} alt="하단 판다 이미지" />
        </div>
      </div>

      {/* 푸터 영역 */}
      <footer>
        <div className="container-home">
          {/* Copyright */}
          <div className="copyright">©codeit - 2024</div>

          {/* Links */}
          <div className="link">
            <div className="pri">
              <p>
                <Link to="/privacy">Privacy Policy</Link>
              </p>
            </div>
            <div className="faq">
              <p>
                <Link to="/faq">FAQ</Link>
              </p>
            </div>
          </div>

          {/* SNS Links */}
          <div className="sns">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebookLogo} alt="Facebook" />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitterLogo} alt="Twitter" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={youtubeLogo} alt="YouTube" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagramLogo} alt="Instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
