import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleParams(key: string, value: string) {
    const params = new URLSearchParams(searchParams);

    if (value.trim()) {
      params.set(key, value.trim());
    } else {
      params.delete(key);
    }
    router.push(`${pathname}?${params.toString()}`);
  }

  return { handleParams };
}
