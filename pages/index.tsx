import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/home.module.css"; // CSS 모듈 임포트
import sec1Img from "@/public/assets/img/landing/section_1.png";
import logoImg from "@/public/assets/img/logo/logo.png";
import Img_home_01 from "@/public/assets/img/landing/Img_home_01.png";
import Img_home_02 from "@/public/assets/img/landing/Img_home_02.png";
import Img_home_03 from "@/public/assets/img/landing/Img_home_03.png";
import panda2 from "@/public/assets/img/landing/panda2.png";
import facebookLogo from "@/public/assets/img/sns/ic_facebook.png";
import twitterLogo from "@/public/assets/img/sns/ic_twitter.png";
import youtubeLogo from "@/public/assets/img/sns/ic_youtube.png";
import instagramLogo from "@/public/assets/img/sns/ic_instagram.png";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>판다마켓</title>
      </Head>
      <div>
        {/* <!-- header --> */}
        <header className={styles.header}>
          <nav className={styles["header-bar"]}>
            {/* <!-- 로고 --> */}
            <div className={styles.logo}>
              <Image
                src={logoImg}
                className={styles["logo-Img"]}
                alt="로고이미지"
              />
              <h1 className={styles["logoTitle"]}>
                <a href="/">판다마켓</a>
              </h1>
            </div>
            {/* <!-- 로그인 --> */}
            {/* <!-- 수정 사항 button => a 태그 사용 --> */}
            <div className={styles.login}>
              <Link href="/login">로그인</Link>
            </div>
          </nav>
        </header>
        {/* <!-- main --> */}
        <main className={styles.main}>
          {/* <!-- 구경하러 가기 --> */}
          <div className={styles.section_1}>
            <nav className={styles.sec1_frame}>
              <div className={styles.sec1_sentence_flex}>
                <div className={styles.sec1_sentence}>
                  <h2>일상의 모든 물건을 거래해 보세요</h2>
                </div>
                <div className={styles.goItems}>
                  <Link href="/items">구경하러 가기</Link>
                </div>
              </div>
              <div className={styles.sec1_img}>
                <Image src={sec1Img} alt="구경하러가기이미지" />
              </div>
            </nav>
          </div>
          {/* <!-- 인기 상품 --> */}
          <div className={styles.section_2}>
            <div className={styles.sec2_1}>
              <nav className={styles.sec2_1frame}>
                <div className={styles.img_size}>
                  <Image src={Img_home_01} alt="인기상품이미지" />
                </div>
                <div className={styles.sec2_hotItem_flex}>
                  <h3>Hot item</h3>
                  <div className={styles.hotItem}>
                    <span className={styles.sec2_sentence} id="hotItemText">
                      인기 상품을 확인해 보세요
                    </span>
                    <span className={styles.sec2_sentence_2}>
                      가장 HOT한 중고거래 물품을
                      <br />
                      판다 마켓에서 확인해 보세요
                    </span>
                  </div>
                </div>
              </nav>
            </div>
            {/* <!-- 상품 검색 --> */}
            <div className={styles.sec2_2}>
              <nav className={styles.sec2_2frame}>
                <div className={styles.sec2_search_flex}>
                  <h3>Search</h3>
                  <div className={styles.search}>
                    <span className={styles.sec2_sentence} id="searchText">
                      구매를 원하는 상품을 검색하세요
                    </span>
                    <span className={styles.sec2_sentence_2}>
                      구매하고 싶은 물품은 검색해서
                      <br />
                      쉽게 찾아보세요
                    </span>
                  </div>
                </div>
                <div className={styles.img_size}>
                  <Image src={Img_home_02} alt="인기상품이미지" />
                </div>
              </nav>
            </div>
            {/* <!-- 상품 등록 --> */}
            <div className={styles.sec2_3}>
              <nav className={styles.sec2_3frame}>
                <div className={styles.img_size}>
                  <Image src={Img_home_03} alt="인기상품이미지" />
                </div>
                <div className={styles.sec2_register_flex}>
                  <h3>Register</h3>
                  <div className={styles.register}>
                    <span className={styles.sec2_sentence} id="registerText">
                      판매를 원하는 상품을 등록하세요
                    </span>
                    <span className={styles.sec2_sentence_2}>
                      어떤 물건이든 판매하고 싶은 상품을
                      <br />
                      쉽게 등록하세요
                    </span>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          {/* <!-- 메인 하단 --> */}
          <div className={styles.section_3}>
            <nav className={styles.sec3_frame}>
              <div className={styles.sec3_sentence}>
                <h2>
                  믿을 수 있는
                  <br />
                  판다마켓 중고 거래
                </h2>
              </div>
              <div className={styles.sec3_img}>
                <Image src={panda2} alt="인기상품이미지" />
              </div>
            </nav>
          </div>
        </main>
        {/* <!-- footer --> */}
        <footer className={styles.footer}>
          <nav className={styles["footer-bar"]}>
            <div className={styles.copyRight}>
              <p>@codeit - 2024</p>
            </div>
            <div className={styles.privacyNfaq}>
              <a href="/privacy">Privacy Policy</a>
              <a href="/faq">FAQ</a>
            </div>
            {/* <!-- 소셜사이트 페이지 이동 --> */}
            {/* <!-- 리스트 형식으로 수정 --> */}
            <ul className={styles.socialNetwork}>
              <li className={styles.facebook}>
                <a
                  href="https://www.facebook.com/?locale=ko_KR"
                  target="_blank"
                >
                  <Image src={facebookLogo} alt="facebook 로고" />
                </a>
              </li>
              <li className={styles.twitter}>
                <a href="https://www.twitter.com" target="_blank">
                  <Image src={twitterLogo} alt="twitter 로고" />
                </a>
              </li>
              <li className={styles.youtube}>
                <a href="https://www.youtube.com/" target="_blank">
                  <Image src={youtubeLogo} alt="youtube 로고" />
                </a>
              </li>
              <li className={styles.instagram}>
                <a href="https://www.instagram.com" target="_blank">
                  <Image src={instagramLogo} alt="instagram 로고" />
                </a>
              </li>
            </ul>
          </nav>
        </footer>
        <script src="js/screen.js"></script>
      </div>
    </>
  );
};

export default Home;
