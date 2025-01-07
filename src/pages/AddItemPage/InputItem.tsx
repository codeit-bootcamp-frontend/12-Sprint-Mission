import React, { ChangeEvent, KeyboardEvent, FocusEvent } from "react";
import "./InputItem.css";

interface InputItemProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isTextArea?: boolean;
  errorMessage?: string;
  type?: string;
}

const InputItem: React.FC<InputItemProps> = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  onKeyDown,
  isTextArea,
  type = "text",
}) => {
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
          type={type}
        />
      )}
    </div>
  );
};

export default InputItem;
