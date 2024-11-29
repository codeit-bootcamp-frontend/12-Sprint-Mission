import SectionHome from '../SectionHome/SectionHome';
import SectionFirstImg from '../../../assets/images/img_home_01.png';
import SectionSecondImg from '../../../assets/images/Img_home_02.png';
import SectionThirdImg from '../../..//assets/images/Img_home_03.png';

const SECTIONS = {
  1: {
    number: 1,
    src: SectionFirstImg,
    keyword: 'Hot item',
    subtitle1: '인기 상품을',
    subtitle2: ' 확인해 보세요',
    paragraph1: '가장 HOT한 중고거래 물품을',
    paragraph2: ' 판다 마켓에서 확인해 보세요',
  },
  2: {
    number: 2,
    src: SectionSecondImg,
    keyword: 'Search',
    subtitle1: '구매를 원하는',
    subtitle2: ' 상품을 검색하세요',
    paragraph1: '구매하고 싶은 물품은 검색해서',
    paragraph2: ' 쉽게 찾아보세요',
  },
  3: {
    number: 3,
    src: SectionThirdImg,
    keyword: 'Register',
    subtitle1: '판매를 원하는',
    subtitle2: ' 상품을 등록하세요',
    paragraph1: '어떤 물건이든 판매하고 싶은 상품을',
    paragraph2: ' 쉽게 등록하세요',
  },
};

const SectionHomeGroup = () => {
  const componentCnt = Object.keys(SECTIONS).length;

  const componentArray = Array(componentCnt).fill(null);

  return componentArray.map((_, index) => {
    return (
      <SectionHome
        key={SECTIONS[(index + 1).toString()].keyword}
        sectionProp={SECTIONS[(index + 1).toString()]}
      />
    );
  });
};

export default SectionHomeGroup;
