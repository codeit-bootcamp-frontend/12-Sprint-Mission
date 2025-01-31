import { useRouter } from "next/router";
import { useState } from "react";
import search from "@/public/icons/ic_search.svg";
import styles from "@/styles/Boards.module.css";
import Input from "@/components/ui/input";

export default function SearchForm({ onSearch, initialValue = "" }) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    const newValue = e.target.value;
    setValue(newValue);
    if (newValue === "") {
      onSearch(""); // 검색어가 비어있으면 검색어 초기화
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(value); // 부모 컴포넌트로 검색어 전달
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        img={search}
        placeholder="검색어를 입력하세요"
        className={styles.search}
        name="q"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
}
