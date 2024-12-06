import dropdownToggle from "../../../../src/assets/icons/dropdown-toggle.svg";

function Dropdown({ isOpen, selected, onToggle, onSelect }) {
  return (
    <div className="dropdown-container">
      <button className="dropdown-btn" onClick={onToggle}>
        {selected}
        <img src={dropdownToggle} alt="더보기" />
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li className="dropdown-item" onClick={() => onSelect("최신순", "recent")}>
            최신순
          </li>
          <li className="dropdown-item" onClick={() => onSelect("인기순", "favorite")}>
            인기순
          </li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
