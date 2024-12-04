import { useState } from "react";
import { useParams } from "react-router-dom";
import useAsync from "@hooks/useAsync";
import { getComments } from "@service/comments";

export default function useComments(name, initialComments = {}) {
  const { id: productId } = useParams();
  const [comments, setComments] = useState(initialComments);
  const { isLoading, error, wrappedFn: getData } = useAsync(getComments);

  async function handleLoad() {
    try {
      const { list, nextCursor: newCursor } = await getData(name, {
        productId,
        cursor: comments.nextCursor,
      });

      setComments((prev) => ({
        ...prev,
        nextCursor: newCursor,
        list: [...prev.list, ...list],
      }));
    } catch (err) {
      console.log(err);
    }
  }

  return { comments, handleLoad, isLoading, error };
}
