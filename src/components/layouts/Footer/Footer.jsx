import SupportList from '../SupportList/SupportList';
import SocialList from '../SocialList/SocialList';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles['home-footer']}>
      <span className={styles['creater-info']}>©Codeit - 2024</span>
      <SupportList />
      <SocialList />
    </footer>
  );
};

export default Footer;
