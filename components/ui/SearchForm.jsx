import { useRouter } from "next/router";
import { useState } from "react";
import search from "@/public/icons/ic_search.svg";
import styles from "@/styles/Boards.module.css";
import Input from "@/components/ui/input";

export default function SearchForm({ initialValue = "" }) {
  const router = useRouter();
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) {
      router.push("/");
      return;
    }

    router.push(`/search?q=${value}`);
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
