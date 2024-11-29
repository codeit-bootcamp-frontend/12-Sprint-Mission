import BannerHome from '../BannerHome/BannerHome';
import BottomBannerImg from '../../../assets/images/Img_home_bottom.png';

const BottomBannerHome = () => {
  return (
    <BannerHome
      className="bottom-banner"
      subtitle1="믿을 수 있는"
      subtitle2="판다마켓 중고 거래"
      nextLineClass=""
      imageSrc={BottomBannerImg}
    />
  );
};

export default BottomBannerHome;
