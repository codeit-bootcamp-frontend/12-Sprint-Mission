import { useState } from 'react';
import DropIcon from './DropIcon/index';
import styles from './index.module.css';
import { ORDER } from '../../../../utils/constant';

const Dropdown = ({ onClick }: { onClick: (orderQuery: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [orderText, setOrderText] = useState(ORDER.RECNET_TEXT);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };
  const clickEvent = (order: string) => {
    onClick(order);
    setIsOpen(false);
    if (order === ORDER.RECENT) setOrderText(ORDER.RECNET_TEXT);
    else setOrderText(ORDER.FAVORITE_TEXT);
  };
  return (
    <div className={styles['dropdown-container']}>
      <button onClick={toggleDropdown} className={styles['dropdown-btn']}>
        <DropIcon order={orderText} />
      </button>
      {isOpen && (
        <ul className={styles['dropdown-list']}>
          <li className={styles['newest-sort']} onClick={() => clickEvent(ORDER.RECENT)}>
            {ORDER.RECNET_TEXT}
          </li>
          <li className={styles['favorite-sort']} onClick={() => clickEvent(ORDER.FAVORITE)}>
            {ORDER.FAVORITE_TEXT}
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
