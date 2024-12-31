import SupportList from './SupportList/index';
import SocialList from './SocialList/index';

import styles from './index.module.css';

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
