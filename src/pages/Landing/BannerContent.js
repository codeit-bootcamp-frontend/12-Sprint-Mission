import heroBannerImg from "../../assets/img/landing/banner_img_hero.svg";
import bottomBannerImg from "../../assets/img/landing/banner_img_bottom.svg";

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
