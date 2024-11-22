import { Link } from 'react-router-dom';

const SupportList = () => {
  return (
    <ul className="support-list">
      <li className="support-list-item">
        <Link to="/privacy" className="support-text privacy">
          Privacy Policy
        </Link>
      </li>
      <li className="support-list-item">
        <Link to="/faq" className="support-text">
          FAQ
        </Link>
      </li>
    </ul>
  );
};

export default SupportList;
