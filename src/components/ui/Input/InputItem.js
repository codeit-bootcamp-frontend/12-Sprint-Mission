import "./InputItem.css";

function InputItem({ title, placeholder, id, value, onChange, isTextArea, className }) {
  return (
    <div className="input-wrapper">
      <div className="additem-label">
        <label htmlFor={id}>{title}</label>
      </div>
      {isTextArea ? (
        <textarea
          type="text"
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
