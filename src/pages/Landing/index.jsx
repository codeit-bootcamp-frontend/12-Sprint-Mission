import Banner from "./Banner";
import Feature from "./Feature";
import { heroBannerData, footerBannerData } from "./BannerContent";
import { featureList } from "./featureContent";

export default function Landing() {
  return (
    <>
      <Banner {...heroBannerData} />
      <Feature list={featureList} />
      <Banner {...footerBannerData} />
    </>
  );
}
