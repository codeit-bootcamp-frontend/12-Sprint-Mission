import { useState } from 'react';
import DropIcon from './DropIcon/index';
import styles from './index.module.css';

const Dropdown = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [orderText, setOrderText] = useState('최신순');

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };
  const clickEvent = (order) => {
    onClick(order);
    setIsOpen(false);
    if (order === 'recent') setOrderText('최신순');
    else setOrderText('좋아요순');
  };
  return (
    <div className={styles['dropdown-container']}>
      <button onClick={toggleDropdown} className={styles['dropdown-btn']}>
        <DropIcon order={orderText} />
      </button>
      {isOpen && (
        <ul className={styles['dropdown-list']}>
          <li
            className={styles['newest-sort']}
            onClick={() => clickEvent('recent')}
          >
            최신순
          </li>
          <li
            className={styles['favorite-sort']}
            onClick={() => clickEvent('favorite')}
          >
            좋아요순
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
