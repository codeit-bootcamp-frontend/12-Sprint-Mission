import "./onSortSelect.css";

function onSortSelect({ onSortSelection }) {
  return (
    <div className="dropdownList">
      <div className="dropdownItem" onClick={() => onSortSelection("recent")}>
        최신순
      </div>
      <div className="dropdownItem" onClick={() => onSortSelection("favorite")}>
        좋아요순
      </div>
    </div>
  );
}

export default onSortSelect;
