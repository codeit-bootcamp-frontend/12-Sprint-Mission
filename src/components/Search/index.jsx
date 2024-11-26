import { useRef, useState } from "react";
import searchIcon from "@assets/img/icon/icon_search.svg";
import clearIcon from "@assets/img/icon/icon_clear.svg";
import styles from "./styles.module.scss";

export default function Search({ value: initialValue, onSubmit, placeholder }) {
  const [value, setValue] = useState(initialValue);
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(value);
    setValue("");
    inputRef.current.blur();
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleClear() {
    setValue("");
    onSubmit("");
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
          value={value}
          onChange={handleChange}
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
