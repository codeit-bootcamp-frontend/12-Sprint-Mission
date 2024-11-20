import { useEffect, useState } from "react";
import { getDeviceType } from "../util/breakpoints";
import { debounce } from "../util/debounce";

export default function usePageSize(initialPageSize) {
  const isResponse = typeof initialPageSize === "object";
  const [pageSize, setPageSize] = useState(() =>
    isResponse ? initialPageSize[getDeviceType()] : initialPageSize
  );

  useEffect(() => {
    if (!isResponse) return;

    const debounceHandleResize = debounce(function () {
      const targetSize = initialPageSize[getDeviceType()];
      setPageSize(targetSize);
    }, 100);

    window.addEventListener("resize", debounceHandleResize);

    return () => {
      window.removeEventListener("resize", debounceHandleResize);
    };
  }, []);

  return { pageSize };
}
