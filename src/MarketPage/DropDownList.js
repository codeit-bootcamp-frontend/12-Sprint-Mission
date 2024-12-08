import React from "react";
import "./DropDownList.css";

function DropdownList({ onSortSelection }) {
  return (
    <div className="dropdownList">
      <div className="dropdownItem" onClick={() => onSortSelection("recent")}>
        최신순
      </div>
      <div className="dropdownItem" onClick={() => onSortSelection("favorite")}>
        인기순
      </div>
    </div>
  );
}

export default DropdownList;
