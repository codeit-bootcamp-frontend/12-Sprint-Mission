import React from "react";
import "./InputItem.css";

function InputItem({
  id,
  label,
  value,
  onChange,
  placeholder,
  onKeyDown,
  isTextArea,
}) {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      {isTextArea ? (
        <input
          className="textArea"
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      ) : (
        <input
          className="inputField"
          id={id}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

export default InputItem;
