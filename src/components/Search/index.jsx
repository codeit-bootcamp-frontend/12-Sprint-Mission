import { useRef } from "react";
import searchIcon from "@assets/img/icon/icon_search.svg";
import clearIcon from "@assets/img/icon/icon_clear.svg";
import styles from "./styles.module.scss";

export default function Search({ onSubmit, placeholder, maxWidth = "100%" }) {
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const keyword = inputRef.current.value;
    onSubmit(keyword);
  }

  function handleClear() {
    inputRef.current.value = "";
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
        ref={inputRef}
        className={styles.input}
        type="text"
        placeholder={placeholder}
      />
      {inputRef.current?.value && (
        <button type="button" className={styles.clear} onClick={handleClear}>
          <img src={clearIcon} alt="검색 초기화" />
        </button>
      )}
    </form>
  );
}
