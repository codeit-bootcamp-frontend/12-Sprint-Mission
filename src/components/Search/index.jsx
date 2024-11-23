import { useState } from "react";
import searchIcon from "@assets/img/icon/icon_search.svg";
import clearIcon from "@assets/img/icon/icon_clear.svg";
import styles from "./styles.module.scss";

export default function Search({
  value: initialValue,
  onSubmit,
  placeholder,
  maxWidth = "100%",
}) {
  const [value, setValue] = useState(initialValue);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(value);
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleClear() {
    setValue("");
    onSubmit("");
  }

  return (
    <form
      className={styles.search}
      onSubmit={handleSubmit}
      style={{ maxWidth }}
    >
      <img src={searchIcon} alt="검색" />
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {value && (
        <button type="button" className={styles.clear} onClick={handleClear}>
          <img src={clearIcon} alt="검색 초기화" />
        </button>
      )}
    </form>
  );
}
