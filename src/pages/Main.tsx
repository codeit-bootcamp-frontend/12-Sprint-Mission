import { Link } from "react-router-dom";
import Container from "../components/Container";
import style from "./Main.module.css"

export default function Main() {

  return (

    <main id="main">
      <section id={style.mainSection}>
        <Container>
          <div className={style.box}>
            <div className={style.mainContent}>
              <div className={style.text}>
                <p className={style.title}>
                  일상의 모든 물건을 <br />
                  거래해 보세요
                </p>
                <Link to="/items" className={style.view}>
                  구경하러 가기
                </Link>
              </div>
              <div className={style.img}>
                <img src={process.env.PUBLIC_URL + '/images/img01.png'} alt="판다가 손을 흔들며 인사하는 이미지" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id={style.productSection01}>
        <Container>
          <div className={style.box}>
            <div className={style.infoBox}>
              <div className={style.imgBox}>
                <img src={process.env.PUBLIC_URL + '/images/img02-1.jpg'} alt="판다가 인기상품을 보고 있는 이미지" />
              </div>

              <div className={style.textBox}>
                <span className={style.infoText}>
                  Hot item
                </span>
                <p className={style.title}>
                  인기 상품을 <br />
                  확인해보세요
                </p>
                <p className={style.text}>
                  가장 HOT한 중고거래 물품을 <br />
                  판다 마켓에서 확인해 보세요
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id={style.productSection02}>
        <Container>
          <div className={style.box}>
            <div className={style.infoBox}>
              <div className={style.imgBox}>
                <img src={process.env.PUBLIC_URL + '/images/img02-2.jpg'} alt="물품 검색을 의미하는 돋보기 이미지" />
              </div>
              <div className={style.textBox}>
                <span className={style.infoText}>
                  Search
                </span>
                <p className={style.title}>
                  구매를 원하는 <br />
                  상품을 검색하세요
                </p>
                <p className={style.text}>
                  구매하고 싶은 물품은 검색해서 <br />
                  쉽게 찾아보세요
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id={style.productSection03}>
        <Container>
          <div className={style.box}>
            <div className={style.infoBox}>
              <div className={style.imgBox}>
                <img src={process.env.PUBLIC_URL + '/images/img02-3.jpg'} alt="상품과 상품을 담을 수 있는 걸 의미하는 폴더 이미지" />
              </div>
              <div className={style.textBox}>
                <span className={style.infoText}>
                  Register
                </span>
                <p className={style.title}>
                  판매를 원하는 <br />
                  상품을 등록하세요
                </p>
                <p className={style.text}>
                  어떤 물건이든 판매하고 싶은 상품을 <br />
                  쉽게 등록하세요
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id={style.infoSection}>
        <Container>
          <div className={style.box}>
            <div className={style.layoutBox}>
              <div className={style.text}>
                <p className={style.title}>
                  믿을 수 있는 <br />
                  판다마켓 중고 거래
                </p>
              </div>
              <div className={style.img}>
                <img src={process.env.PUBLIC_URL + '/images/img03.png'} alt="판다가 손을 흔들며 인사하는 이미지" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>

  )

}