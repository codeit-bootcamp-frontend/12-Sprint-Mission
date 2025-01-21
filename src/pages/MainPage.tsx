import styled from "styled-components";
import heroImg from "../assets/Img_home_top.svg";
import contentImg1 from "../assets/Img_home_01.svg";
import contentImg2 from "../assets/Img_home_02.svg";
import contentImg3 from "../assets/Img_home_03.svg";
import heroBottomImg from "../assets/Img_home_bottom.svg";

const HeroBanner = styled.section`
  height: 540px;
  background-color: #cfe5ff;
  @media (max-width: 1199px) {
    height: 770px;
    padding-top: 100px;
  }
  @media (max-width: 767px) {
    height: inherit;
    padding-top: 48px;
  }
  > div.wrap {
    position: relative;
    height: 100%;
    @media (max-width: 1199px) {
      justify-content: center;
      align-items: flex-start;
      text-align: center;
      padding: 0;
    }
    @media (max-width: 767px) {
      flex-direction: column;
      align-items: center;
      gap: 150px;
    }
  }
`;
const HeroBannerTxt = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (max-width: 1199px) {
    align-items: center;
  }
  @media (max-width: 767px) {
    gap: 18px;
  }
  h2 {
    color: var(--gray-scale-700);
    font-size: 40px;
    line-height: 1.4;
    font-weight: var(--font-weight-bold);
    @media (max-width: 767px) {
      font-size: 32px;
      line-height: 1.4;
    }
  }
  h2 br {
    @media (max-width: 1199px) {
      display: none;
    }
    @media (max-width: 767px) {
      display: inherit;
    }
  }
`;
const BtnMove = styled.a`
  display: inline-block;
  width: 357px;
  height: 56px;
  background-color: var(--primary-color-100);
  border-radius: 40px;
  color: var(--gray-scale-0);
  font-weight: var(--font-weight-semibold);
  text-align: center;
  align-content: center;
  @media (max-width: 767px) {
    width: inherit;
    height: inherit;
    padding: 12px 71px;
    font-size: 18px;
    line-height: 26px;
  }
  &:hover {
    background-color: var(--primary-color-200);
  }
  &:active {
    background-color: var(--primary-color-300);
  }
`;
const HeroImgBox = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  @media (max-width: 1199px) {
    width: 100%;
    right: inherit;
  }
  @media (max-width: 767px) {
    position: inherit;
  }
`;
const ContentBox = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1120px;
  margin: 0 auto;
  flex-direction: column;
  @media (max-width: 1199px) {
    gap: 52px;
    max-width: 100%;
    padding: 24px 24px 56px;
  }
  @media (max-width: 767px) {
    gap: 40px;
    padding: 83px 16px;
  }
  div:nth-child(2) {
    @media (max-width: 1199px) {
      flex-direction: column-reverse;
      align-items: flex-end;
    }
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 138px 0;
  gap: 64px;
  border-radius: 12px;
  @media (max-width: 1199px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin: 0;
    gap: 24px;
  }
  > img {
    @media (max-width: 1199px) {
      width: 100%;
    }
  }
`;
const ContentTxt = styled.div`
  h2 {
    margin: 12px 0 24px;
    line-height: 1.4;
    color: var(--gray-scale-700);
    font-size: 40px;
    line-height: 1.4;
    font-weight: var(--font-weight-bold);
    @media (max-width: 1199px) {
      font-size: 32px;
      line-height: 42px;
      margin: 16px 0 24px;
    }
    @media (max-width: 767px) {
      margin: 8px 9 16px;
      font-size: 24px;
      line-height: 1.4em;
      letter-spacing: 0.02em;
    }
  }
  h2 br {
    @media (max-width: 1199px) {
      display: none;
    }
  }
  &.right {
    text-align: right;
  }
`;
const EngTag = styled.p`
  color: var(--primary-color-100);
  font-size: 18px;
  font-weight: var(--font-weight-bold);
  @media (max-width: 1199px) {
    line-height: 26px;
  }
  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 1.4em;
  }
`;
const SubTxt = styled.p`
  font-size: 24px;
  font-weight: var(--font-weight-medium);
  color: var(--gray-scale-700);
  line-height: 32px;
  @media (max-width: 1199px) {
    font-size: 18px;
    line-height: 26px;
  }
  @media (max-width: 767px) {
    font-size: 16px;
    height: inherit;
    line-height: 1.2em;
    letter-spacing: 0.08em;
  }
`;
const HeroBottomBanner = styled.section`
  height: 540px;
  background-color: #cfe5ff;
  @media (max-width: 1199px) {
    height: 927px;
  }
  @media (max-width: 767px) {
    height: inherit;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1120px;
    margin: 0 auto;
    height: 100%;
    position: relative;
    @media (max-width: 1199px) {
      max-width: 100%;
      flex-direction: column;
      position: inherit;
      padding: 200px 0 0;
      text-align: center;
    }
    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 150px;
    }
  }
  div h2 {
    color: var(--gray-scale-700);
    font-size: 40px;
    line-height: 1.4;
    font-weight: var(--font-weight-bold);
  }
  div img {
    position: absolute;
    bottom: 0;
    right: 0;
    @media (max-width: 1199px) {
      width: 100%;
      position: inherit;
      right: inherit;
    }
  }
`;

function MainPage() {
  return (
    <>
      <HeroBanner>
        <div className="wrap">
          <HeroBannerTxt>
            <h2>
              일상의 모든 물건을
              <br /> 거래해 보세요
            </h2>
            <BtnMove href="/items">구경하러 가기</BtnMove>
          </HeroBannerTxt>
          <HeroImgBox src={heroImg} alt="장바구니를 메고 인사하는 판다" />
        </div>
      </HeroBanner>
      <ContentBox>
        <Content>
          <img src={contentImg1} alt="인기 상품 이미지" />
          <ContentTxt>
            <EngTag>Hot item</EngTag>
            <h2>
              인기 상품을
              <br />
              확인해 보세요
            </h2>
            <SubTxt>
              가장 HOT한 중고거래 물품을
              <br />
              판다 마켓에서 확인해 보세요
            </SubTxt>
          </ContentTxt>
        </Content>
        <Content>
          <ContentTxt className="right">
            <EngTag>Search</EngTag>
            <h2>
              구매를 원하는
              <br />
              상품을 검색하세요
            </h2>
            <SubTxt>
              구매하고 싶은 물품은 검색해서
              <br />
              쉽게 찾아보세요
            </SubTxt>
          </ContentTxt>
          <img src={contentImg2} alt="상품 검색 이미지" />
        </Content>
        <Content>
          <img src={contentImg3} alt="판매 상품 등록 이미지" />
          <ContentTxt>
            <EngTag>Register</EngTag>
            <h2>
              판매를 원하는
              <br />
              상품을 등록하세요
            </h2>
            <SubTxt>
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </SubTxt>
          </ContentTxt>
        </Content>
      </ContentBox>
      <HeroBottomBanner>
        <div>
          <h2>
            믿을 수 있는
            <br />
            판다마켓 중고 거래
          </h2>
          <img src={heroBottomImg} alt="인사하는 판다 두 마리" />
        </div>
      </HeroBottomBanner>
    </>
  );
}

export default MainPage;
