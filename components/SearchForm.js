import { useRouter } from "next/router";
import { useState } from "react";

export default function SearchForm({ initialValue = "" }) {
  const router = useRouter();
  const [value, setValue] = useState();

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) {
      router.push("/boards");
      return;
    }

    router.push(`/search?q=${value}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="q" value={value} onChange={handleChange} />
      <button>검색</button>
    </form>
  );
}
