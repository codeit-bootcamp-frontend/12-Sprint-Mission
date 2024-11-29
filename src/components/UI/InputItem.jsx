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
      {label && (
        <label htmlFor={id} className="inputLabel">
          {label}
        </label>
      )}
      {isTextArea ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="textArea"
        />
      ) : (
        <input
          id={id}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          className="inputField"
        />
      )}
    </div>
  );
}

export default InputItem;
