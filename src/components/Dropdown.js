import React, { useState } from "react";
import styles from "./Dropdown.module.css";

function Dropdown({ options, selectedValue, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (value) => {
    onChange(value); // 부모 컴포넌트로 선택 값 전달
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button
        className={styles.dropdown_button}
        onClick={handleToggle}
        type="button"
      >
        {options.find((option) => option.value === selectedValue)?.label ||
          "선택"}
      </button>
      {isOpen && (
        <ul className={styles.dropdown_menu}>
          {options.map((option) => (
            <li
              key={option.value}
              className={styles.dropdown_item}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
