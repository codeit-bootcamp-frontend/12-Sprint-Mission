import MainHeader from "../../components/Header/MainHeader";
import TopSection from "./components/TopSection";
import MidSection from "./components/MidSection";

//images
import HotItemImg from "../../assets/images/Img_home_01.svg";
import SearchImg from "../../assets/images/Img_home_02.svg";
import RegsiterImg from "../../assets//images//Img_home_03.svg";

const MainPage = () => {
  return (
    <div>
      <MainHeader />
      <TopSection />
      <MidSection
        src={HotItemImg}
        category="Hot Item"
        title={
          <>
            인기 상품을 <br /> 확인해 보세요
          </>
        }
        content="가장 HOT한 중고거래 물품을 판다 마켓에서 확인해 보세요"
      />
      <MidSection
        src={SearchImg}
        category="Search"
        title={
          <>
            구매를 원하는
            <br /> 상품을 검색하세요
          </>
        }
        content="구매하고 싶은 물품은 검색해서 쉽게 찾아보세요"
        opposite={true}
      />
      <MidSection
        src={RegsiterImg}
        category="Regsiter"
        title={
          <>
            판매를 원하는
            <br /> 상품을 등록하세요
          </>
        }
        content="어떤 물건이든 판마해고 싶은 상품을 쉽게 등록하세요"
      />
    </div>
  );
};

export default MainPage;
