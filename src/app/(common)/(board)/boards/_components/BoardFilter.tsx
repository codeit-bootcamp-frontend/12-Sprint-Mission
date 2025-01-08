"use client";

import { ChangeEvent, useState } from "react";
import { Search } from "@/components/Search";
import { Select } from "@/components/ui";
import useParams from "@/hooks/useParams";
import styles from "./BoardFilter.module.scss";

export default function BoardFilter() {
  const { searchParams, handleParams } = useParams();

  const initialKeyword = searchParams.get("keyword") || "";
  const orderBy = searchParams.get("orderBy") || "recent";

  const [keyword, setKeyword] = useState(initialKeyword);

  function handleKeywordSubmit() {
    handleParams({ keyword });
  }

  function handleKeywordChange(e: ChangeEvent<HTMLInputElement>) {
    setKeyword(e.target.value);
  }

  function handleKeywordClear() {
    handleParams({ keyword });
    setKeyword("");
  }

  function handleOrderChange(orderBy: string) {
    handleParams({ orderBy });
  }

  return (
    <div className={styles.filter}>
      <div className={styles.keyword}>
        <Search
          value={keyword}
          onChange={handleKeywordChange}
          onSubmit={handleKeywordSubmit}
          onClear={handleKeywordClear}
          placeholder="검색어를 입력해주세요."
        />
      </div>
      <div className={styles.order}>
        <Select
          value={orderBy}
          onChange={handleOrderChange}
          options={[
            { value: "recent", label: "최신순" },
            { value: "like", label: "좋아요순" },
          ]}
        />
      </div>
    </div>
  );
}
