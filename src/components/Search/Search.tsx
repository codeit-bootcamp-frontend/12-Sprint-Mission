"use client";

import { ChangeEvent, FormEvent, useRef } from "react";
import Image from "next/image";
import searchIcon from "@assets/img/icon/icon_search.svg";
import clearIcon from "@assets/img/icon/icon_clear.svg";
import styles from "./Search.module.scss";

interface SearchProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onClear: () => void;
  placeholder: string;
  onOpenRecent?: () => void;
  onCloseRecent?: () => void;
}

export function Search({
  value,
  onChange,
  onSubmit,
  onClear,
  placeholder,
  onOpenRecent,
  onCloseRecent,
}: SearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit();
    inputRef.current?.blur();
    if (onCloseRecent) {
      onCloseRecent();
    }
  }

  function handleClear() {
    onClear();
    inputRef.current?.blur();
  }

  function handleFocus() {
    if (onOpenRecent) {
      onOpenRecent();
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.search} onSubmit={handleSubmit}>
        <Image src={searchIcon} alt="검색" />
        <input
          type="text"
          ref={inputRef}
          className={styles.input}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={handleFocus}
        />
        {value && (
          <button type="button" className={styles.clear} onClick={handleClear}>
            <Image src={clearIcon} alt="검색 초기화" />
          </button>
        )}
      </form>
    </div>
  );
}
