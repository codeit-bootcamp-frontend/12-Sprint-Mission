import { useEffect, useRef, useState } from "react";
import arrowIcon from "../../assets/img/icon/icon_arrow_down.svg";
import sortIcon from "../../assets/img/icon/icon_sort.svg";
import styles from "./styles.module.scss";

export default function Select({ value, options, onChange }) {
  const [isShow, setIsShow] = useState(false);
  const selectRef = useRef(null);
  const selectedLabel = options.find((option) => option.value === value).label;

  useEffect(() => {
    function handleClickOutside(e) {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsShow(false);
      }
    }
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  function handleSelect() {
    setIsShow((prev) => !prev);
  }

  function handleClick(value) {
    setIsShow(false);
    onChange(value);
  }

  return (
    <div className={styles.select} ref={selectRef}>
      <button type="button" className={styles.button} onClick={handleSelect}>
        <span className={styles.label}>{selectedLabel}</span>
        <img className={styles.arrow} src={arrowIcon} alt="선택하기" />
        <img className={styles.sort} src={sortIcon} alt="선택하기" />
      </button>
      {isShow && (
        <ul className={styles.list}>
          {options.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                className={styles.item}
                onClick={() => handleClick(option.value)}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
