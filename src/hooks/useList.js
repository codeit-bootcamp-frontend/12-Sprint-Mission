import { useEffect, useState } from "react";
import useAsync from "@hooks/useAsync";
import usePageSize from "@hooks/usePageSize";

export default function useList(
  fetchFn,
  { pageSize: sizeOption, ...restParams }
) {
  const { isLoading, error, wrappedFn: getData } = useAsync(fetchFn);
  const [items, setItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const { pageSize } = usePageSize(sizeOption);

  useEffect(() => {
    (async function fetchData() {
      const result = await getData({
        pageSize,
        ...restParams,
      });

      if (!result) return;

      const { list, totalCount } = result;

      setItems(list);
      setTotalCount(totalCount);
    })();
  }, [pageSize, ...Object.values(restParams)]);

  return {
    isLoading,
    totalCount,
    pageSize,
    error,
    items,
  };
}
