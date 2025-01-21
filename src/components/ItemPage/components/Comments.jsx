import { useEffect, useState } from "react";
import { getProductComment } from "../../../api";

export default function Comments({ id }) {
  const [commentList, setCommentList] = useState([]);
  useEffect(() => {
    getProductComment(id).then((data) => {
      setCommentList(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      <div>
        {commentList?.list?.map((comment) => {
          return (
            <div key={comment.id}>
              <div>{comment.content}</div>
              <div>{comment.writer.nickname}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
