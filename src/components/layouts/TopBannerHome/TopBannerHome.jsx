import BannerHome from '../BannerHome/BannerHome';
import TopBannerImg from '../../../assets/images/Img_home_top.png';

const BANNER_DATA = {
  className: 'top-banner',
  title: '판다마켓을 소개합니다.',
  subtitle: '일상의 모든 물건을 거래해 보세요',
  imageSrc: TopBannerImg,
  linkText: '구경하러 가기',
  linkClass: 'browsing',
};

const TopBannerHome = () => {
  return <BannerHome {...BANNER_DATA} />;
};

export default TopBannerHome;
