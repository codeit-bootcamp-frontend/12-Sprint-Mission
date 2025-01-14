import { ChangeEvent } from "react";
import "./InputItem.css";

interface InputItemProps {
  title: string;
  placeholder: string;
  id: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isTextArea?: boolean;
  className?: string;
}

function InputItem({ title, placeholder, id, value, onChange, isTextArea, className }: InputItemProps) {
  return (
    <div className="input-wrapper">
      <div className="additem-label">
        <label htmlFor={id}>{title}</label>
      </div>
      {isTextArea ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`input-description ${className}`}
        />
      ) : (
        <input type="text" id={id} value={value} onChange={onChange} placeholder={placeholder} className="input-item" />
      )}
    </div>
  );
}

export default InputItem;
