import { useRouter } from "next/router";
import styles from "./board.module.css";
import FormTextarea from "@/components/form/form-textarea";
import Link from "next/link";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchBoard from "@/lib/fetch-board";
import formatDate from "@/lib/format-data";
import fetchComments from "@/lib/fetch-comments";
import formatDateNow from "@/lib/format-data-now";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.params!.id;
  const data = await fetchBoard(Number(id));
  const comment = await fetchComments(Number(id));
  return {
    props: {
      data,
      comment: comment?.list,
    },
  };
};

export default function Page({
  data,
  comment,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // null 일수도 있어서 예외처리를 해줘야 아래 data 사용 시 ?. 처리 안해줘도 됨.
  console.log(comment);
  if (!data) return "문제가 발생했습니다. 다시 시도해주세요.";
  const router = useRouter();
  const id = router.query["id"];
  return (
    <>
      <div className={styles.board_info}>
        <div className={styles.menu}>
          <p>
            <img src="/assets/img/icon_dot.svg" alt="메뉴버튼" />
          </p>
          <ul>
            <li>수정</li>
            <li>삭제</li>
          </ul>
        </div>
        <div className="common_title">{data.title}</div>
        <div className={styles.btm}>
          <div className={styles.profile}>
            <figure>
              <img src="/assets/img/icon_my.svg" alt={data.writer.nickname} />
            </figure>
            <p>{data?.writer.nickname}</p>
            <span>{formatDate(data.updatedAt)}</span>
          </div>
          <div className={styles.like_btn}>
            <img src="/assets/img/icon_wish.svg" alt="좋아요 버튼" />
            <span>{data.likeCount}</span>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        {data.image ? <img src={data.image} alt={data.image} /> : null}
        {data.content}
      </div>

      <div className={styles.comment_add}>
        <h3>댓글달기</h3>
        <FormTextarea
          placeholder="댓글을 입력해주세요."
          height={104}></FormTextarea>
        <button className="btn" disabled={true}>
          등록
        </button>
      </div>
      {comment?.length === 0 ? (
        <div className={styles.empty}>
          <img src="/assets/img/comment_empty.png" alt="댓글없음" />
          <span>
            아직 댓글이 없어요, <br /> 지금 댓글을 달아보세요!
          </span>
        </div>
      ) : (
        <ul className={styles.list}>
          {comment?.map((el) => {
            return (
              <li>
                <div className={styles.menu}>
                  <p>
                    <img src="/assets/img/icon_dot.svg" alt="메뉴버튼" />
                  </p>
                  <ul>
                    <li>수정</li>
                    <li>삭제</li>
                  </ul>
                </div>
                <h3>{el.content}</h3>
                <div className={styles.info}>
                  <figure>
                    <img
                      src={
                        el.writer.image
                          ? el.writer.image
                          : "/assets/img/icon_my.svg"
                      }
                      alt={el.writer.nickname}
                    />
                  </figure>
                  <div className={styles.right}>
                    <p>{el.writer.nickname}</p>
                    <span>{formatDateNow(el.updatedAt)}</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      <Link className={`btn round img ${styles.link}`} href="/boards">
        목록으로 돌아가기
        <img src="/assets/img/icon_back.svg" alt="돌아가기 버튼" />
      </Link>
    </>
  );
}
