import { useEffect, useState } from "react";

export default function useProduct(fetchFn) {
  const [isLoading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [orderBy, setOrderBy] = useState("recent");
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    (async function fetchData() {
      try {
        setLoading(true);
        const { list, totalCount } = await fetchFn({
          page,
          pageSize,
          orderBy,
          keyword,
        });
        setItems(list);
        setTotalCount(totalCount);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [page, pageSize, orderBy, keyword]);

  function handlePage(number) {
    setPage(number);
  }

  function handlePageSize(number) {
    setPageSize(number);
  }

  function handleOrderBy(value) {
    setPage(1);
    setOrderBy(value);
  }

  function handleKeyword(value) {
    setPage(1);
    setKeyword(value);
  }

  return {
    isLoading,
    items,
    totalCount,
    page,
    pageSize,
    orderBy,
    keyword,
    handlePage,
    handlePageSize,
    handleOrderBy,
    handleKeyword,
  };
}
