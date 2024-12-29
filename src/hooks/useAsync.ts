import { useState } from "react";

export default function useAsync<T>(asyncFn: (...args: any[]) => Promise<T>) {
  const [result, setResult] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  async function wrappedFn(...args: Parameters<typeof asyncFn>) {
    try {
      setError(null);
      setIsLoading(true);
      const res = await asyncFn(...args);
      setResult(res);
      return res;
    } catch (err) {
      if (err instanceof Error && err.name !== "CanceledError") {
        setError(err);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, error, result, wrappedFn };
}
