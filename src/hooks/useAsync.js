import { useState } from "react";

export default function useAsync(asyncFn) {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function wrappedFn(...args) {
    try {
      setError(null);
      setIsLoading(true);
      const res = await asyncFn(...args);
      setResult(res);
      return res;
    } catch (err) {
      if (err.name !== "CanceledError") {
        setError(err);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, error, result, wrappedFn };
}
