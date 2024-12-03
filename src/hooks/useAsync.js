import { useRef, useState } from "react";

export default function useAsync(asyncFn) {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortcontrollerRef = useRef(null);

  async function wrappedFn(...args) {
    abortcontrollerRef.current?.abort();
    abortcontrollerRef.current = new AbortController();

    try {
      setError(null);
      setIsLoading(true);
      const res = await asyncFn(...args, {
        signal: abortcontrollerRef.current?.signal,
      });
      setResult(res);
      return res;
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, error, result, wrappedFn };
}
