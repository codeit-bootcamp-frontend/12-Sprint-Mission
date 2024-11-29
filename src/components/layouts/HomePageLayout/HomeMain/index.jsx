import TopBannerHome from '../BannerHome/TopBannerHome/index';
import BottomBannerHome from '../BannerHome/BottomBannerHome/index';
import SectionHomeGroup from '../SectionHomeGroup/index';

const HomeMain = () => {
  return (
    <main>
      <TopBannerHome />
      <SectionHomeGroup />
      <BottomBannerHome />
    </main>
  );
};

export default HomeMain;
