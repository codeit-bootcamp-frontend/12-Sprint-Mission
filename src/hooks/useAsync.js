import { useState } from "react";

export default function useAsync(asyncFn) {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function wrappedFn(...args) {
    try {
      setError(null);
      setLoading(true);
      return await asyncFn(...args);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  return { isLoading, error, wrappedFn };
}
