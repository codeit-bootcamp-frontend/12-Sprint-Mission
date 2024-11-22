import { useEffect, useState } from "react";
import { getDeviceType } from "@util/breakpoints";
import { debounce } from "@util/debounce";

export default function usePageSize(
  initialPageSize = {
    pc: 10,
    tablet: 6,
    mobile: 4,
  }
) {
  const [pageSize, setPageSize] = useState(
    () => initialPageSize[getDeviceType()]
  );

  useEffect(() => {
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
