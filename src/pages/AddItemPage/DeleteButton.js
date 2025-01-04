import React from "react";
import deleteIcon from "../assets/ic-reset.png";
import "./DeleteButton.css";

function DeleteButton({ onClick, label }) {
  return (
    <div
      className="deleteButton"
      aria-label={`${label} 삭제`}
      onClick={onClick}
    >
      <img src={deleteIcon} alt="이미지 삭제" />
    </div>
  );
}

export default DeleteButton;
