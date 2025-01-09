import { useState } from "react";
import useAsync from "@hooks/useAsync";
import { getComments } from "@service/comments";
import { BoardName, CommentList } from "@type/comment";
import { useParams } from "next/navigation";

export default function useComments(
  name: BoardName,
  initialComments: CommentList
) {
  const { id: productId } = useParams();
  const [comments, setComments] = useState(initialComments);
  const { isLoading, error, wrappedFn: getData } = useAsync(getComments);

  async function handleLoad() {
    try {
      const result = await getData(name, {
        productId: Number(productId),
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

  async function refreshComments() {
    const data = await getComments(name, {
      productId: Number(productId),
      limit: 5,
    });
    setComments(data);
  }

  return { comments, handleLoad, refreshComments, isLoading, error };
}
