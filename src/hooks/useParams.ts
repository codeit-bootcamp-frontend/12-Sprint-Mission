import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

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
  }

  return { searchParams, handleParams };
}
