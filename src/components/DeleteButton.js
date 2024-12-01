import React from "react";
import DeleteIcon from "../assets/ic-reset.png";
import "./DeleteButton.css";

function DeleteButton({ onClick, label }) {
  return (
    <div
      className="DeleteButton"
      aria-label={`${label} 삭제`}
      onClick={onClick}
    >
      <img src={DeleteIcon} alt="이미지 삭제" />
    </div>
  );
}

export default DeleteButton;
