import { useRef } from "react";
import searchIcon from "../../assets/img/icon/icon_search.svg";
import styles from "./styles.module.scss";

export default function Search({ onSubmit, placeholder }) {
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(inputRef.current.value);
  }

  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <img src={searchIcon} alt="검색" />
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        ref={inputRef}
      />
    </form>
  );
}
