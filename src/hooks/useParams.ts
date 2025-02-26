import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function useParams() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleParams = useCallback(
    function handleParams(updateParams: Record<string, string | number>) {
      const params = new URLSearchParams(searchParams);

      Object.entries(updateParams).forEach(([key, value]) => {
        const formattedValue = value.toString().trim();
        if (formattedValue) {
          params.set(key, formattedValue);
        } else {
          params.delete(key);
        }
      });

      // 기존 ssr 방식 (서버에 재요청이 감)
      //router.push(`${pathname}?${params.toString()}`);

      // csr 방식
      window.history.pushState(null, "", `${pathname}?${params.toString()}`);
    },
    [searchParams, pathname]
  );

  return { searchParams, handleParams };
}
