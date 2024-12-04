import { useEffect } from "react";
import useAsync from "@hooks/useAsync";

export default function useProductList(fetchFn, params) {
  const { page, pageSize, keyword, orderBy } = params;
  const { isLoading, error, result, wrappedFn: getData } = useAsync(fetchFn);
  const items = result?.list || [];
  const totalCount = result?.totalCount || 0;

  useEffect(() => {
    (async function fetchData() {
      await getData({
        page,
        pageSize,
        keyword,
        orderBy,
      });
    })();
  }, [page, pageSize, keyword, orderBy]);

  return {
    isLoading,
    error,
    items,
    totalCount,
  };
}
