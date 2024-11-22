import BannerHome from '../BannerHome/BannerHome';
import TopBannerImg from '../../../assets/images/Img_home_top.png';

const TopBannerHome = () => {
  return (
    <BannerHome
      className="top-banner"
      title="판다마켓을 소개합니다."
      subtitle1="일상의 모든 물건을"
      subtitle2=" 거래해 보세요"
      nextLineClass="top-banner-title-next-line"
      imageSrc={TopBannerImg}
      linkText="구경하러 가기"
      linkClass="browsing"
    />
  );
};

export default TopBannerHome;
