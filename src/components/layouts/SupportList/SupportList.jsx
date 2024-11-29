import { Link } from 'react-router-dom';
import styles from './SupportList.module.css';

const SupportList = () => {
  return (
    <ul className={styles['support-list']}>
      <li className={styles['support-list-item']}>
        <Link
          to="/privacy"
          className={`${styles['support-text']} ${styles.privacy}`}
        >
          Privacy Policy
        </Link>
      </li>
      <li className={styles['support-list-item']}>
        <Link to="/faq" className={styles['support-text']}>
          FAQ
        </Link>
      </li>
    </ul>
  );
};

export default SupportList;
