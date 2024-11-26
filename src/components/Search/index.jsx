import { useRef, useState } from "react";
import searchIcon from "@assets/img/icon/icon_search.svg";
import clearIcon from "@assets/img/icon/icon_clear.svg";
import styles from "./styles.module.scss";

export default function Search({ value, onSubmit, placeholder, setIsOpen }) {
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(inputRef.current.value);
    setIsOpen && setIsOpen(false);
    inputRef.current.blur();
  }

  function handleClear() {
    inputRef.current.value = "";
    onSubmit("");
  }

  function handleFocus() {
    setIsOpen && setIsOpen(true);
  }

  return (
    <div className={styles.container}>
      <form className={styles.search} onSubmit={handleSubmit}>
        <img src={searchIcon} alt="검색" />
        <input
          className={styles.input}
          type="text"
          placeholder={placeholder}
          ref={inputRef}
          defaultValue={value}
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
