import { useRef, useState } from "react";

export default function useAsync(asyncFn) {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortcontrollerRef = useRef(null);

  async function wrappedFn(...args) {
    abortcontrollerRef.current?.abort();
    abortcontrollerRef.current = new AbortController();

    try {
      setError(null);
      setLoading(true);
      return await asyncFn(...args, {
        signal: abortcontrollerRef.current?.signal,
      });
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err);
      }
    } finally {
      setLoading(false);
    }
  }

  return { isLoading, error, wrappedFn };
}
