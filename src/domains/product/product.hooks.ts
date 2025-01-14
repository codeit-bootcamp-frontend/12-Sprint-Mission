import { useState, useEffect } from "react";
import { fetchProductById, fetchProductCommentById } from "./product.api";
import { ProductDetail, Comment } from "./product.types";
import { HttpException } from "../../utils/exceptions";

export function useProductDetails(productId: number | string | undefined) {
  const [item, setItem] = useState<ProductDetail | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!productId) return;

    async function loadData() {
      setLoading(true);
      try {
        const [product, commentsResponse] = await Promise.all([
          fetchProductById(productId),
          fetchProductCommentById(productId),
        ]);
        setItem(product);
        setComments(commentsResponse.list);
      } catch (error) {
        console.error(error);
        const message = error instanceof Error ? error.message : "알 수 없는 오류가 발생했습니다";
        setError(message);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [productId]);

  return { item, comments, error, loading };
}
