import { useEffect, useState } from "react";
import { debounce } from "../util/debounce";
import { getDeviceType } from "../util/breakpoints";

const INITIAL_RESPONSIVE_SIZE = {
  pc: 10,
  tablet: 6,
  mobile: 4,
};

export default function useProduct(
  fetchFn,
  responsiveOption = INITIAL_RESPONSIVE_SIZE
) {
  const [isLoading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(
    () => responsiveOption[getDeviceType(window.innerWidth)]
  );
  const [orderBy, setOrderBy] = useState("recent");
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    (async function fetchData() {
      try {
        setLoading(true);
        const { list, totalCount } = await fetchFn({
          page,
          pageSize,
          orderBy,
          keyword,
        });
        setItems(list);
        setTotalCount(totalCount);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [page, pageSize, orderBy, keyword]);

  useEffect(() => {
    const debounceHandleResize = debounce(function () {
      const targetSize = responsiveOption[getDeviceType(window.innerWidth)];
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

  return {
    isLoading,
    items,
    totalCount,
    page,
    pageSize,
    orderBy,
    keyword,
    handlePage,
    handlePageSize,
    handleOrderBy,
    handleKeyword,
  };
}
