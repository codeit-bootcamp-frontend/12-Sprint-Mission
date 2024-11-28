import { useState } from "react";
import useLocalStorage from "@hooks/useLocalStorage";

const RECENT_SEARCH_SIZE = 5;

export default function useRecentSearch({ initialKeyword, onChange }) {
  const [searchInput, setSearchInput] = useState(initialKeyword || "");
  const [recentSearh, setRecentSearch] = useLocalStorage("keyword", []);

  // 검색창 핸들러 (submit, change, clear)
  function handleSearchSubmit() {
    if (searchInput.trim()) {
      setRecentSearch((prev) =>
        [
          searchInput,
          ...prev.filter((keyword) => keyword !== searchInput),
        ].slice(0, RECENT_SEARCH_SIZE)
      );
    }
    //검색인풋 초기화가 좋은 UX일까? (검색취소 버튼이 나오도록, 검색어가 떠있는게 좋은것 같음)
    //setSearchInput("");
    onChange(searchInput);
  }

  function handleSearchChange(e) {
    setSearchInput(e.target.value);
  }

  function handleSearchClear() {
    setSearchInput("");
    onChange("");
  }

  // 최근검색 이벤트 핸들러 (click, remove, clear)
  function handleRecentSearchClick(value) {
    setRecentSearch((prev) =>
      [value, ...prev.filter((keyword) => keyword !== value)].slice(
        0,
        RECENT_SEARCH_SIZE
      )
    );
    setSearchInput(value);
    onChange(value);
  }

  function handleRecentSearchRemove(value) {
    setRecentSearch((prev) => prev.filter((keyword) => keyword !== value));
  }

  function handleRecentSearchClear() {
    setRecentSearch([]);
  }

  return {
    searchInput,
    recentSearh,
    handleSearchSubmit,
    handleSearchChange,
    handleSearchClear,
    handleRecentSearchClick,
    handleRecentSearchRemove,
    handleRecentSearchClear,
  };
}
