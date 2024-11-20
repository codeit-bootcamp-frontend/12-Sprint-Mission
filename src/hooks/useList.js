import { useEffect, useState } from "react";
import useAsync from "./useAsync";
import usePageSize from "./usePageSize";

export default function useList(fetchFn, { pageSize: size = 10, params = {} }) {
  const { isLoading, error, wrappedFn: getData } = useAsync(fetchFn);
  const [items, setItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const { pageSize } = usePageSize(size);

  useEffect(() => {
    (async function fetchData() {
      const result = await getData({
        page,
        pageSize,
        ...params,
      });

      if (!result) return;

      const { list, totalCount } = result;

      setItems(list);
      setTotalCount(totalCount);
    })();
  }, [page, pageSize, JSON.stringify(params)]);

  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  function handlePage(number) {
    setPage(number);
  }

  const pagination = {
    totalCount,
    page,
    pageSize,
    onChangePage: handlePage,
  };

  return {
    isLoading,
    error,
    items,
    pagination,
  };
}
