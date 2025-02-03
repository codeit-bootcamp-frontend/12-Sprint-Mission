import { useEffect, useState } from "react";
import { getProductComment } from "../../../api";
import profile from "../../../img/Group 33728.svg";
import { differenceInHours, differenceInDays } from "date-fns";

export default function Comments({ id }) {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    getProductComment(id).then((data) => {
      setCommentList(data);
      console.log(data);
    });
  }, [id]);

  const isValidDate = (date) => date && !isNaN(new Date(date).getTime());

  return (
    <>
      <div style={{ marginTop: "60px" }}>
        {commentList?.list?.map((comment) => {
          console.log("Comment data:", comment);

          const createdAt = isValidDate(comment.createdAt)
            ? new Date(comment.createdAt)
            : null;

          const updatedAt = isValidDate(comment.updatedAt)
            ? new Date(comment.updatedAt)
            : null;

          let timeDiff = "";

          if (
            createdAt &&
            updatedAt &&
            createdAt.getTime() !== updatedAt.getTime()
          ) {
            const daysDiff = differenceInDays(updatedAt, createdAt);

            if (daysDiff > 0) {
              timeDiff = `${daysDiff}일 전`;
            } else {
              const hoursDiff = differenceInHours(updatedAt, createdAt);
              timeDiff = `${hoursDiff}시간 전`;
            }
          }

          return (
            <div key={comment.id}>
              <div style={{ margin: "24px 0px" }}>{comment.content}</div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img
                  style={{
                    backgroundColor: "#c8c9c7",
                    borderRadius: "50px",
                  }}
                  src={profile}
                  alt="개인 프로필"
                />
                <div>
                  <div>{comment.writer.nickname}</div>
                  {timeDiff && <div>{timeDiff}</div>}
                </div>
              </div>
              <hr
                style={{
                  border: "1px solid rgba(229, 231, 235, 1)",
                }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
