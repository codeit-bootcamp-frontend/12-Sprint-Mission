import Banner from "./_components/Banner";
import Feature from "./_components/Feature";
import {
  heroBannerData,
  footerBannerData,
  featureList,
} from "./_components/landingContents";

export default function LandingPage() {
  return (
    <>
      <Banner {...heroBannerData} />
      <Feature list={featureList} />
      <Banner {...footerBannerData} />
    </>
  );
}
