import { useState } from 'react';
import DropIcon from '../DropIcon/DropIcon';
const Dropdown = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="dropdown-container">
      <button onClick={toggleDropdown}>
        <DropIcon />
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          <li>최신순</li>
          <li>좋아요순</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
