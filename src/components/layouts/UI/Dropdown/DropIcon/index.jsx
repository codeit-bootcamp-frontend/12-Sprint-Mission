import { useMediaQuery } from 'react-responsive';
import underArrowImg from '../../../../../assets/images/underArrowImg.png';
import sortIcon from '../../../../../assets/images/sortIcon.png';
import styles from './index.module.css';

const DropIcon = ({ order }) => {
  const mobileWidth = useMediaQuery({ query: '(max-width:768px)' });
  if (mobileWidth) {
    return (
      <img src={sortIcon} alt="정렬 아이콘" className={styles['sort-icon']} />
    );
  }
  return (
    <div className={styles['wide-sort-icon']}>
      <span className={styles['wide-sort-icon-title']}>{order}</span>
      <img
        src={underArrowImg}
        alt="아래쪽 화살표 이미지"
        className={styles['under-arrow-img']}
      />
    </div>
  );
};
export default DropIcon;
