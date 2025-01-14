import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function useParams() {
  const router = useRouter();
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

      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams, pathname, router]
  );

  return { searchParams, handleParams };
}
