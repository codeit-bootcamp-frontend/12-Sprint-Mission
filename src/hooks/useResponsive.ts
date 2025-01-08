import { useEffect, useState } from "react";
import { getDeviceType } from "@util/breakpoints";
import { debounce } from "@util/debounce";

type ResponsiveNumber = Record<"pc" | "tablet" | "mobile", number>;

export default function useResponsive(
  initialOption: ResponsiveNumber = {
    pc: 10,
    tablet: 6,
    mobile: 4,
  }
) {
  const [responsiveValue, setResponsiveValue] = useState(
    () => initialOption[getDeviceType()]
  );

  useEffect(() => {
    const debounceHandleResize = debounce(function () {
      if (typeof window === "undefined") return;
      const targetSize = initialOption[getDeviceType()];
      setResponsiveValue(targetSize);
    }, 100);

    window.addEventListener("resize", debounceHandleResize);

    return () => {
      window.removeEventListener("resize", debounceHandleResize);
    };
  }, []);

  return responsiveValue;
}
