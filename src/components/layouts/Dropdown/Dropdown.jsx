import { useState } from 'react';
import DropIcon from '../DropIcon/DropIcon';
import styles from './Dropdown.module.css';

const Dropdown = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={styles['dropdown-container']}>
      <button onClick={toggleDropdown} className={styles['dropdown-btn']}>
        <DropIcon />
      </button>
      {isOpen && (
        <ul className={styles['dropdown-list']}>
          <li className={styles['newest-sort']}>최신순</li>
          <li className={styles['favorite-sort']}>좋아요순</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
