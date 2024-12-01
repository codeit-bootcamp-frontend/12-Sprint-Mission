import React from "react";
import "./AddItemForm.css";

function AddItemForm({
  label,
  type,
  placeholder,
  id,
  value,
  onChange,
  isTextArea,
  onKeyDown,
}) {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      {isTextArea ? (
        <textarea
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      )}
    </div>
  );
}

export default AddItemForm;
