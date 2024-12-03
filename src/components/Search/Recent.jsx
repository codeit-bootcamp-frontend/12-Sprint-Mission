import { cloneElement, useEffect, useRef, useState } from "react";
import searchIcon from "@assets/img/icon/icon_search.svg";
import styles from "./Recent.module.scss";

export function Recent({
  title,
  data,
  onItemClick,
  onItemRemove,
  onItemClear,
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

  function handleClick(keyword) {
    onItemClick(keyword);
    setIsOpen(false);
  }

  function handleRemove(e, keyword) {
    e.stopPropagation();
    onItemRemove(keyword);
  }

  return (
    <div className={styles.container} ref={modalRef}>
      {cloneElement(children, {
        onOpenRecent: () => setIsOpen(true),
        onCloseRecent: () => setIsOpen(false),
      })}
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
            {data?.map((keyword) => (
              <li key={keyword}>
                <div
                  className={styles.item}
                  onClick={() => handleClick(keyword)}
                >
                  <img src={searchIcon} alt="검색어" />
                  <div className={styles.content}>{keyword}</div>
                  <button
                    type="button"
                    className={styles.button}
                    onClick={(e) => handleRemove(e, keyword)}
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
