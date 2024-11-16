import Banner from "./Banner";
import Feature from "./Feature";
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
