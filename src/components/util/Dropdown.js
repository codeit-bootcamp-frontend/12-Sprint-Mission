import "./Dropdown.css";

function Dropdown({ onSortChange, dropdownState }) {
  const isDropdown = dropdownState ? "on" : "";
  const className = `drop-box ${isDropdown}`;
  return (
    <div className={className}>
      <span onClick={() => onSortChange("recent")}>최신순</span>
      <span onClick={() => onSortChange("favorite")}>인기순</span>
    </div>
  );
}

export default Dropdown;
