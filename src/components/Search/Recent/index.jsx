import { cloneElement, useEffect, useRef, useState } from "react";
import searchIcon from "@assets/img/icon/icon_search.svg";
import styles from "./styles.module.scss";

export default function Recent({
  title,
  data,
  onItemClear,
  onItemClick,
  onItemRemove,
  children,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  function handleRemove(e, id) {
    e.stopPropagation();
    onItemRemove(id);
  }

  return (
    <div className={styles.container} ref={modalRef}>
      {cloneElement(children, { setIsOpen })}
      {isOpen && (
        <div className={styles.modal}>
          <header className={styles.header}>
            <div className={styles.title}>{title}</div>
            <button
              type="button"
              className={styles.button}
              onClick={onItemClear}
            >
              전체삭제
            </button>
          </header>
          {data.length === 0 && (
            <div className={styles.empty}>최근 검색어가 없습니다.</div>
          )}
          <ul className={styles.list}>
            {data?.map(({ id, value }) => (
              <li key={id}>
                <div className={styles.item} onClick={() => onItemClick(value)}>
                  <img src={searchIcon} alt="검색어" />
                  <div className={styles.content}>{value}</div>
                  <button
                    type="button"
                    className={styles.button}
                    onClick={(e) => handleRemove(e, id)}
                  >
                    삭제
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.control}>
            <button
              type="button"
              className={styles.button}
              onClick={() => setIsOpen(false)}
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
