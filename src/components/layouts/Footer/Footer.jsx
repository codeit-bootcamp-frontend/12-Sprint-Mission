import SupportList from '../SupportList/SupportList';
import SocialList from '../SocialList/SocialList';

const Footer = () => {
  return (
    <footer>
      <span className="creater-info">©Codeit - 2024</span>
      <SupportList />
      <SocialList />
    </footer>
  );
};

export default Footer;
