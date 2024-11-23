import { useMediaQuery } from 'react-responsive';
import underArrowImg from '../../../assets/images/underArrowImg.png';
import sortIcon from '../../../assets/images/sortIcon.png';
const DropIcon = () => {
  const mobileWidth = useMediaQuery({ query: '(max-width:768px)' });
  if (mobileWidth) {
    return <img src={sortIcon} alt="정렬 아이콘" className="sort-icon" />;
  }
  return (
    <div className="wide-sort-icon">
      <span className="wide-sort-icon-title">최신순</span>
      <img
        src={underArrowImg}
        alt="아래쪽 화살표 이미지"
        className="under-arrow-img"
      />
    </div>
  );
};
export default DropIcon;
