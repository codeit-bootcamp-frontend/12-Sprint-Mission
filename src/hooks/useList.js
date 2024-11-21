import { useEffect, useState } from "react";
import useAsync from "@hooks/useAsync";
import usePageSize from "@hooks/usePageSize";

export default function useList(fetchFn, sizeOption = 10, params) {
  const { isLoading, error, wrappedFn: getData } = useAsync(fetchFn);
  const [items, setItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const { pageSize } = usePageSize(sizeOption);

  useEffect(() => {
    (async function fetchData() {
      const result = await getData({
        pageSize,
        ...params,
      });

      if (!result) return;

      const { list, totalCount } = result;

      setItems(list);
      setTotalCount(totalCount);
    })();
  }, [pageSize, params]);

  return {
    isLoading,
    totalCount,
    pageSize,
    error,
    items,
  };
}
