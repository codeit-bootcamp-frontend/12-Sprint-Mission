import BannerHome from '../index';
import BottomBannerImg from '../../../../../assets/images/Img_home_bottom.png';

const BANNER_DATA = {
  className: 'bottom-banner',
  subtitle: '믿을 수 있는 판다마켓 중고 거래',
  imageSrc: BottomBannerImg,
  linkText: '구경하러 가기',
  linkClass: 'browsing',
};

const BottomBannerHome = () => {
  return <BannerHome {...BANNER_DATA} />;
};

export default BottomBannerHome;
