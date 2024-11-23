import Banner from "./components/LandingBanner";
import Feature from "./components/LandingFeature";
import {
  heroBannerData,
  footerBannerData,
  featureList,
} from "./landingContents";

export default function Landing() {
  return (
    <>
      <Banner {...heroBannerData} />
      <Feature list={featureList} />
      <Banner {...footerBannerData} />
    </>
  );
}
