import { useEffect } from "react";
import useAsync from "@/hooks/useAsync";

export default function useList(fetchFn, pageSize = 10, params) {
  const { isLoading, error, result, wrappedFn: getData } = useAsync(fetchFn);
  const items = result?.list || [];
  const totalCount = result?.totalCount || 0;

  useEffect(() => {
    (async function fetchData() {
      await getData({
        pageSize,
        ...params,
      });
    })();
  }, [pageSize, params]);

  return {
    isLoading,
    error,
    items,
    totalCount,
  };
}
