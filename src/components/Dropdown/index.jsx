import { createContext, useContext, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

/** compound pattern + context api 복습 (mui dropdown 참고) */
const DropdownContext = createContext();
const useDropdown = () => useContext(DropdownContext);

function Dropdown({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const value = {
    isOpen,
    setIsOpen,
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <DropdownContext.Provider value={value}>
      <div className={styles["list-container"]} ref={dropdownRef}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

function Toggle({ children }) {
  const { setIsOpen } = useDropdown();

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return <button onClick={handleClick}>{children}</button>;
}

function Menu({ children }) {
  const { isOpen } = useDropdown();

  if (!isOpen) return null;

  return <ul className={styles.list}>{children}</ul>;
}

function Item({ onClick, children }) {
  const { setIsOpen } = useDropdown();

  function handleClick() {
    setIsOpen(false);
    onClick();
  }

  return (
    <li>
      <button type="button" className={styles.item} onClick={handleClick}>
        {children}
      </button>
    </li>
  );
}

Dropdown.Toggle = Toggle;
Dropdown.Menu = Menu;
Dropdown.Item = Item;

export default Dropdown;
