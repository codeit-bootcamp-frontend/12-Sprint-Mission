import { useEffect, useState } from "react";
import { getDeviceType } from "@util/breakpoints";
import { debounce } from "@util/debounce";

export default function useReponsive(
  initialOption = {
    pc: 10,
    tablet: 6,
    mobile: 4,
  }
) {
  const [pageSize, setPageSize] = useState(
    () => initialOption[getDeviceType()]
  );

  useEffect(() => {
    const debounceHandleResize = debounce(function () {
      const targetSize = initialOption[getDeviceType()];
      setPageSize(targetSize);
    }, 100);

    window.addEventListener("resize", debounceHandleResize);

    return () => {
      window.removeEventListener("resize", debounceHandleResize);
    };
  }, []);

  return pageSize;
}
