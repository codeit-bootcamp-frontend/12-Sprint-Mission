import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (q) {
      // 검색어에 따라 API 호출
      fetch(`/api/search?q=${q}`)
        .then((response) => response.json())
        .then((data) => {
          setResults(data);
        });
    }
  }, [q]);

  return (
    <div>
      <h1>Search Page</h1>
      <h1>Search Result: {q}</h1>
      <ul>
        {results.length > 0 ? (
          results.map((result, index) => <li key={index}>{result.title}</li>)
        ) : (
          <p>No results found</p>
        )}
      </ul>
    </div>
  );
}
