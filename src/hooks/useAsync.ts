import { useCallback, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useAsync<T>(asyncFn: (...args: any[]) => Promise<T>) {
  const [result, setResult] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const wrappedFn = useCallback(
    async function wrappedFn(...args: Parameters<typeof asyncFn>) {
      let isAborted = false;

      try {
        setError(null);
        setIsLoading(true);
        const res = await asyncFn(...args);
        setResult(res);
        return res;
      } catch (err) {
        if (err instanceof Error) {
          if (err.name === "CanceledError") {
            isAborted = true;
          } else {
            setError(err);
          }
        }
      } finally {
        if (!isAborted) {
          setIsLoading(false);
        }
      }
    },
    [asyncFn]
  );

  return { isLoading, setIsLoading, error, result, wrappedFn };
}
