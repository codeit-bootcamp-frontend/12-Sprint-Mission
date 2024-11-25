import { Link } from "react-router-dom";

export default function Main() {

  return (

    <main id="main">
      <section id="mainSection">
        <div className="container">
          <div className="box">
            <div className="mainContent">
              <div className="text">
                <p className="title">
                  일상의 모든 물건을 <br />
                  거래해 보세요
                </p>
                <Link to="/items" className="view">
                  구경하러 가기
                </Link>
              </div>
              <div className="img">
                <img src={process.env.PUBLIC_URL + '/images/img01.png'} alt="판다가 손을 흔들며 인사하는 이미지" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="productSection01">
        <div className="container">
          <div className="box">
            <div className="infoBox">
              <div className="imgBox">
                <img src={process.env.PUBLIC_URL + '/images/img02-1.jpg'} alt="판다가 인기상품을 보고 있는 이미지" />
              </div>

              <div className="textBox">
                <span className="infoText">
                  Hot item
                </span>
                <p className="title">
                  인기 상품을 <br />
                  확인해보세요
                </p>
                <p className="text">
                  가장 HOT한 중고거래 물품을 <br />
                  판다 마켓에서 확인해 보세요
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="productSection02">
        <div className="container">
          <div className="box">
            <div className="infoBox">
              <div className="imgBox">
                <img src={process.env.PUBLIC_URL + '/images/img02-2.jpg'} alt="물품 검색을 의미하는 돋보기 이미지" />
              </div>
              <div className="textBox">
                <span className="infoText">
                  Search
                </span>
                <p className="title">
                  구매를 원하는 <br />
                  상품을 검색하세요
                </p>
                <p className="text">
                  구매하고 싶은 물품은 검색해서 <br />
                  쉽게 찾아보세요
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="productSection03">
        <div className="container">
          <div className="box">
            <div className="infoBox">
              <div className="imgBox">
                <img src={process.env.PUBLIC_URL + '/images/img02-3.jpg'} alt="상품과 상품을 담을 수 있는 걸 의미하는 폴더 이미지" />
              </div>
              <div className="textBox">
                <span className="infoText">
                  Register
                </span>
                <p className="title">
                  판매를 원하는 <br />
                  상품을 등록하세요
                </p>
                <p className="text">
                  어떤 물건이든 판매하고 싶은 상품을 <br />
                  쉽게 등록하세요
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="infoSection">
        <div className="container">
          <div className="box">
            <div className="layoutBox">
              <div className="text">
                <p className="title">
                  믿을 수 있는 <br />
                  판다마켓 중고 거래
                </p>
              </div>
              <div className="img">
                <img src={process.env.PUBLIC_URL + '/images/img03.png'} alt="판다가 손을 흔들며 인사하는 이미지" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

  )

}