import { useState, useEffect } from "react";
import { fetchProductById, fetchProductCommentById } from "../api/product";
import { HttpException } from "../utils/exceptions";
import { ProductDetail } from "../types";

export function useProductDetails(productId: string | undefined) {
  const [item, setItem] = useState<ProductDetail | null>(null);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const getProductById = async (productId: string | undefined) => {
    try {
      const data = await fetchProductById(productId);
      setItem(data);
    } catch (error) {
      if (error instanceof HttpException) {
        setError(error.message);
      } else {
        setError("알 수 없는 오류가 발생했습니다.");
      }
    } finally {
      setLoading(false);
    }
  };

  const getProductCommentById = async (productId: string | undefined) => {
    try {
      const { list } = await fetchProductCommentById(productId);
      setComments(list);
    } catch (error) {
      if (error instanceof HttpException) {
        setError(error.message);
      } else {
        setError("알 수 없는 오류가 발생했습니다");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (productId) {
      getProductById(productId);
      getProductCommentById(productId);
    }
  }, [productId]);

  return { item, comments, error, loading };
}
