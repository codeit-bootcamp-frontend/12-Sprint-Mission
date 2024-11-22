import { useEffect, useState } from "react";
import useAsync from "@hooks/useAsync";
import usePageSize from "@hooks/usePageSize";

export default function useList(fetchFn, sizeOption = 10, params) {
  const { isLoading, error, wrappedFn: getData } = useAsync(fetchFn);
  const [items, setItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const { pageSize } = usePageSize(sizeOption);

  useEffect(() => {
    /**
     * Pagination 컴포넌트에서 페이지 번호를 보정하는 과정 중,
     * 보정 이전의 값으로 발생한 요청으로 인해 리스트 데이터가 오염된 현상을 해결.
     * (최대 페이지 번호를 넘긴 요청건에서 응답된 빈리스트가 들어가게 됨)
     *
     * 방법1) 업데이트된 params의 page를 체크해서 요청할수있는 번호를 넘으면 데이터 요청 취소
     * 쓰지않은이유 : params안에 page가 무조건 들어있다는 가정하에 체크를 하게되는데 잘못된 방식 같음
     */

    //if (totalCount > 0 && params?.page > Math.ceil(totalCount / pageSize))
    //  return;

    /**
     * 방법2) params의 page가 업데이트가 연속으로 일어났을때,
     * 바로 전의 업데이트 때문에 요청한 통신을 취소하는 방식으로 접근 (cleanup에 abort실행)
     * abortcontroller를 넘겨야해서 코드량이 많지만 그래도 안정적인 것 같다.
     * (리사이징때문에 연속적으로 요청을 보낼때에도 해당 방법이 도와줄것 같다.)
     */

    const controller = new AbortController();
    const signal = controller.signal;

    if (params && totalCount > 0) {
      if (params.page > Math.ceil(totalCount / pageSize)) {
        return;
      }
    }

    (async function fetchData() {
      const result = await getData(
        {
          pageSize,
          ...params,
        },
        signal
      );

      if (!result) return;

      const { list, totalCount } = result;

      setItems(list);
      setTotalCount(totalCount);
    })();

    return () => {
      controller.abort();
    };
  }, [pageSize, params]);

  return {
    isLoading,
    totalCount,
    pageSize,
    error,
    items,
  };
}
