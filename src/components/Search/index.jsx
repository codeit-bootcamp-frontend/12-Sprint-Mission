import { useRef } from "react";
import searchIcon from "@assets/img/icon/icon_search.svg";
import clearIcon from "@assets/img/icon/icon_clear.svg";
import styles from "./styles.module.scss";

export default function Search({
  value,
  onChange,
  onSubmit,
  onClear,
  placeholder,
  setIsOpen,
}) {
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(value);
    inputRef.current.blur();
    setIsOpen && setIsOpen(false);
  }

  function handleClear() {
    onClear();
    inputRef.current.blur();
  }

  function handleFocus() {
    setIsOpen && setIsOpen(true);
  }

  return (
    <div className={styles.container}>
      <form className={styles.search} onSubmit={handleSubmit}>
        <img src={searchIcon} alt="검색" />
        <input
          type="text"
          ref={inputRef}
          className={styles.input}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={handleFocus}
        />
        {value && (
          <button type="button" className={styles.clear} onClick={handleClear}>
            <img src={clearIcon} alt="검색 초기화" />
          </button>
        )}
      </form>
    </div>
  );
}
