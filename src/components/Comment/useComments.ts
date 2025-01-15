import { useState } from "react";
import useAsync from "@hooks/useAsync";
import { getComments } from "@service/comments";
import { BoardName, CommentList } from "@type/comment";
import { useParams } from "next/navigation";

export default function useComments(
  name: BoardName,
  initialComments: CommentList
) {
  const { id } = useParams();
  const [comments, setComments] = useState(initialComments);
  const { isLoading, error, wrappedFn: getData } = useAsync(getComments);

  async function handleLoad() {
    try {
      const result = await getData(name, {
        id: Number(id),
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
      id: Number(id),
      limit: 5,
    });
    setComments(data);
  }

  return { comments, handleLoad, refreshComments, isLoading, error };
}
