import React from "react";
import "./Tag.css";
import iconX from "../../../assets/images/icons/ic_X.png";

export default function Tag({ tags, onDelete }) {
  return (
    <div className="tags__container">
      {tags.map((tag) => {
        return (
          <div className="tag" key={tag}>
            <p className="tag__Text">{tag}</p>
            <img
              src={iconX}
              alt="삭제아이콘"
              className="delete-icon"
              onClick={() => onDelete(tag)}
            />
          </div>
        );
      })}
    </div>
  );
}
