import IcFaceBook from '../../../assets/images/ic_facebook.png';
import IcTwitter from '../../../assets/images/ic_twitter.png';
import IcYoutube from '../../../assets/images/ic_youtube.png';
import IcInstagram from '../../../assets/images/ic_instagram.png';

const SocialList = () => {
  return (
    <ul className="social-list">
      <li className="social-list-item">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <img
            src={IcFaceBook}
            alt="facebook img 생성 불가"
            className="social-img"
          />
        </a>
      </li>
      <li className="social-list-item">
        <a href="https://www.x.com" target="_blank" rel="noreferrer">
          <img
            src={IcTwitter}
            alt="twitter img 생성 불가"
            className="social-img"
          />
        </a>
      </li>
      <li className="social-list-item">
        <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
          <img
            src={IcYoutube}
            alt="youtube img 생성 불가"
            className="social-img"
          />
        </a>
      </li>
      <li className="social-list-item">
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <img
            src={IcInstagram}
            alt="instagram img 생성 불가"
            className="social-img"
          />
        </a>
      </li>
    </ul>
  );
};

export default SocialList;
