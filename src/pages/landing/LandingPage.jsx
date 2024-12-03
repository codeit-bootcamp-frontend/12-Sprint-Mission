import Banner from "./components/Banner";
import Feature from "./components/Feature";
import {
  heroBannerData,
  footerBannerData,
  featureList,
} from "./components/landingContents";

export default function LandingPage() {
  return (
    <>
      <Banner {...heroBannerData} />
      <Feature list={featureList} />
      <Banner {...footerBannerData} />
    </>
  );
}
