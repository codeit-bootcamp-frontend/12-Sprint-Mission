import { useState } from "react";
import { useParams } from "react-router-dom";
import useAsync from "@hooks/useAsync";
import { getComments } from "@service/comments";
import { CommentList } from "@type/comment";

export default function useComments(
  name: string,
  initialComments: CommentList
) {
  const { id: productId } = useParams();
  const [comments, setComments] = useState(initialComments);
  const { isLoading, error, wrappedFn: getData } = useAsync(getComments);

  async function handleLoad() {
    try {
      const result = await getData(name, {
        productId,
        cursor: comments.nextCursor,
      });

      if (!result) return;

      const { list, nextCursor: newCursor } = result;

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
