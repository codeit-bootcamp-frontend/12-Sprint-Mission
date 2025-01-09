import { useEffect } from "react";
import { getArticles } from "@service/article";
import useAsync from "@hooks/useAsync";
import { ListQueryParams, PaginationResponse } from "@type/common";
import { Article } from "@/types/article";

type useProductListProps = Partial<ListQueryParams>;

export default function useBoardList(
  { page, pageSize, keyword, orderBy }: useProductListProps,
  initialData: PaginationResponse<Article>
) {
  const {
    isLoading,
    error,
    result,
    wrappedFn: getData,
  } = useAsync(getArticles);
  const items = result?.list || initialData.list || [];
  const totalCount = result?.totalCount || initialData.totalCount || 0;

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
