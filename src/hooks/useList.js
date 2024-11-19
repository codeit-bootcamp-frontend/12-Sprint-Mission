import { useEffect, useState } from "react";
import { debounce } from "../util/debounce";
import { getDeviceType } from "../util/breakpoints";
import useAsync from "./useAsync";

const DEFAULT_RESPONSIVE_SIZE = {
  pc: 10,
  tablet: 6,
  mobile: 4,
};

export default function useList(
  fetchFn,
  {
    initialOrderBy = "recent",
    initialKeyword = "",
    responsive = DEFAULT_RESPONSIVE_SIZE,
  }
) {
  const { isLoading, error, wrappedFn: getData } = useAsync(fetchFn);
  const [items, setItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(() => responsive[getDeviceType()]);
  const [orderBy, setOrderBy] = useState(initialOrderBy);
  const [keyword, setKeyword] = useState(initialKeyword);

  // 데이터 패칭
  useEffect(() => {
    (async function fetchData() {
      const result = await getData({
        page,
        pageSize,
        orderBy,
        keyword,
      });

      if (!result) return;

      const { list, totalCount } = result;

      setItems(list);
      setTotalCount(totalCount);
    })();
  }, [page, pageSize, orderBy, keyword]);

  // 반응형 pageSize 업데이트
  useEffect(() => {
    const debounceHandleResize = debounce(function () {
      const targetSize = responsive[getDeviceType()];
      setPage(1);
      setPageSize(targetSize);
    }, 100);

    window.addEventListener("resize", debounceHandleResize);

    return () => {
      window.removeEventListener("resize", debounceHandleResize);
    };
  }, []);

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

  const pagination = {
    totalCount,
    page,
    pageSize,
    onChangePage: handlePage,
    onChangePageSize: handlePageSize,
  };

  return {
    isLoading,
    error,
    items,
    orderBy,
    keyword,
    handleOrderBy,
    handleKeyword,
    pagination,
  };
}
