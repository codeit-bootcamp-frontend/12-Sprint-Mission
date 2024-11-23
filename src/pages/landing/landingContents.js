import heroBannerImg from "@assets/img/landing/banner_img_hero.svg";
import bottomBannerImg from "@assets/img/landing/banner_img_bottom.svg";
import featureImg1 from "@assets/img/landing/landing_content_01.svg";
import featureImg2 from "@assets/img/landing/landing_content_02.svg";
import featureImg3 from "@assets/img/landing/landing_content_03.svg";

export const heroBannerData = {
  bannerType: "hero",
  title: "일상의 모든 물건을 \n거래해 보세요",
  action: { to: "/items", label: "구경하러가기" },
  bannerImg: {
    src: heroBannerImg,
    alt: "일상의 모든 물건을 거래해보세요. 판다마켓",
  },
};

export const footerBannerData = {
  bannerType: "footer",
  title: "믿을 수 있는 \n판다마켓 중고 거래",
  bannerImg: {
    src: bottomBannerImg,
    alt: "믿을 수 있는 판다마켓 중고 거래",
  },
};

export const featureList = [
  {
    keyword: "Hot item",
    title: "인기 상품을 \n확인해 보세요",
    description: "가장 HOT한 중고거래 물품을 \n판다 마켓에서 확인해 보세요",
    featureImg: {
      src: featureImg1,
      alt: "인기 상품을 확인해 보세요",
    },
  },
  {
    keyword: "Search",
    title: "구매를 원하는 \n상품을 검색하세요",
    description: "구매하고 싶은 물품은 검색해서 \n쉽게 찾아보세요",
    featureImg: {
      src: featureImg2,
      alt: "구매를 원하는 상품을 검색하세요",
    },
  },
  {
    keyword: "Register",
    title: "판매를 원하는 \n상품을 등록하세요",
    description: "어떤 물건이든 판매하고 싶은 \n상품을 쉽게 등록하세요",
    featureImg: {
      src: featureImg3,
      alt: "판매를 원하는 상품을 등록하세요",
    },
  },
];
