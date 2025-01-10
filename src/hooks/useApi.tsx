import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: "https://panda-market-api.vercel.app/products/",
});

const useApi = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError | null>(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get<T>(url);
        setData(response.data);
      } catch (error) {
        setError(error as AxiosError);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [url]);

  return { data, loading, error };
};

export default useApi;
