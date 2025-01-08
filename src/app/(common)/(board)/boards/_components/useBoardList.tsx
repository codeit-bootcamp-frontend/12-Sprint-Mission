import { useEffect } from "react";
import { getArticles } from "@service/article";
import useAsync from "@hooks/useAsync";
import { ListQueryParams } from "@type/common";

type useProductListProps = Partial<ListQueryParams>;

export default function useBoardList({
  page,
  pageSize,
  keyword,
  orderBy,
}: useProductListProps) {
  const {
    isLoading,
    error,
    result,
    wrappedFn: getData,
  } = useAsync(getArticles);
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
  }, [page, pageSize, keyword, orderBy, getData]);

  return {
    isLoading,
    error,
    items,
    totalCount,
  };
}
