import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./Dropdown.module.scss";

/** compound pattern + context api 복습 (mui dropdown 참고) */
const DropdownContext = createContext();
const useDropdown = () => useContext(DropdownContext);

export function Dropdown({ onChange = () => {}, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const value = {
    onChange,
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
        <div className={styles["list-inner"]}>{children}</div>
      </div>
    </DropdownContext.Provider>
  );
}

function Toggle({ children, asChild = false }) {
  const { setIsOpen } = useDropdown();

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  if (asChild) {
    return cloneElement(children, { onClick: handleClick });
  }

  return (
    <button type="button" onClick={handleClick}>
      {children}
    </button>
  );
}

function Menu({ children }) {
  const { isOpen } = useDropdown();

  if (!isOpen) return null;

  return <ul className={styles.list}>{children}</ul>;
}

function Item({ value, onClick, children }) {
  const { setIsOpen, onChange } = useDropdown();

  function handleClick() {
    setIsOpen(false);
    onChange(value);

    if (onClick) {
      onClick();
    }
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
