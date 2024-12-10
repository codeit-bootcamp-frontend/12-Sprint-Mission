import { useEffect } from "react";
import { getProducts } from "@service/product";
import useAsync from "@hooks/useAsync";

export default function useProductList(params) {
  const { page, pageSize, keyword, orderBy } = params;
  const {
    isLoading,
    error,
    result,
    wrappedFn: getData,
  } = useAsync(getProducts);
  const items = result?.list || [];
  const totalCount = result?.totalCount || 0;

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    (async function fetchData() {
      await getData(
        {
          page,
          pageSize,
          keyword,
          orderBy,
        },
        signal
      );
    })();

    return () => controller.abort();
  }, [page, pageSize, keyword, orderBy]);

  return {
    isLoading,
    error,
    items,
    totalCount,
  };
}
