import Banner from "@/components/landing/Banner";
import Feature from "@/components/landing/Feature";
import {
  heroBannerData,
  footerBannerData,
  featureList,
} from "@/components/landing/landingContents";

export default function LandingPage() {
  return (
    <>
      <Banner {...heroBannerData} />
      <Feature list={featureList} />
      <Banner {...footerBannerData} />
    </>
  );
}
