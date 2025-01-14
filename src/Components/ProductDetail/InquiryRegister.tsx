import dayjs from 'dayjs';
import isLeapYear from 'dayjs/plugin/isLeapYear'; // 윤년 판단 플러그인
import 'dayjs/locale/ko';
import React, { ChangeEvent, SyntheticEvent, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/productDetail/productDetail.module.css";
import { SelectBox, SelectButton } from "../../styles/productDetail/SelectBox";
import optionMenuImg from "../../assets/images/productDetail/option_menu.svg";
import profileDefaultImg from "../../assets/images/productDetail/default_profile.svg";
import btnBackImg from "../../assets/images/app/button/btn_back.svg";
import emptyCommentImg from "../../assets/images/productDetail/empty_comment.svg";
import { TCommentDataProps, CommentUIProps } from "./types";
import { getTimeDiff } from '../App/Dayjs';

dayjs.extend(isLeapYear);
dayjs.locale('ko');

function EmptyPlaceholder() {
  return (
    <div className={styles.emptyComment}>
      <img src={emptyCommentImg} alt="댓글이 없어요" />
    </div>
  );
}

const CommentEditUI: React.FC<CommentUIProps> = ({
  setShowEdit,
  setShowSelect,
}) => {
  return (
    <div className={styles.editContainer}>
      <button
        onClick={() => {
          setShowEdit(null);
          setShowSelect(null);
        }}
      >
        취소
      </button>
      <button>수정 완료</button>
    </div>
  );
};

function InquiryRegister({
  commentsData,
}: {
  commentsData: TCommentDataProps | undefined;
}) {
  const { list } = commentsData || {};
  const [showSelect, setShowSelect] = useState<number | null>(null);
  const [showEdit, setShowEdit] = useState<number | null>(null);
  const [submit, setSubmit] = useState<boolean>(false);
  const [textarea,setTextarea] = useState('');
  const outRef = useRef<HTMLDivElement | null>(null);

  const handleProfileError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = profileDefaultImg;
  };

  const getWriteComment = (e:ChangeEvent<HTMLTextAreaElement>) => {
    setTextarea(e.target.value)
  }

  useEffect(() => {
    const handleClickOutside = (e: { target: any }) => {
      // 해당 이벤트가 영역 밖이라면 셀렉트 비활성화
      if (outRef.current && !outRef.current.contains(e.target)) {
        setShowSelect(null);
      }
    };
    window.addEventListener("mouseup", handleClickOutside, true);
    return () => {
      window.removeEventListener("mouseup", handleClickOutside, true);
    };
  }, []);

  useEffect(() => {
      if (textarea !== "") {
        setSubmit(true);
      } else {
        setSubmit(false);
      }
  }, [textarea]);

  return (
    <div className={`${styles.pagiContainer} ${styles.commentContainer}`}>
      <div className={styles.section2}>
        <form>
          <label htmlFor="inquiry" className={styles.subTitle}>
            문의하기
          </label>
          <textarea
            name="inquiry"
            id="inquiry"
            onChange={getWriteComment}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
          <button className={styles.btnSubmit} disabled={submit ? false : true}>
            등록
          </button>
        </form>
        {/* length 속성을 읽을 수 없다는 오류가 발생되어 Optional Chaining 연산자 사용 */}
        {list?.length === 0 && <EmptyPlaceholder />}
        <ul className={styles.commentList}>
          {list &&
            list.map((comment, i) => {
              const { writer } = comment;
              return (
                <li key={comment.id}>
                  <div className={styles.contentText}>
                    {showEdit === i ? (
                      <>
                        <textarea defaultValue={comment.content} />
                        <CommentEditUI
                          setShowEdit={setShowEdit}
                          setShowSelect={setShowSelect}
                        />
                      </>
                    ) : (
                      <>
                        <p>{comment.content}</p>
                        <div className={styles.btnMore}>
                          <img
                            src={optionMenuImg}
                            alt="더보기"
                            onClick={() => setShowSelect(i)}
                          />
                          {showSelect === i && (
                            <>
                              <SelectBox>
                                <SelectButton
                                  onClick={() => setShowEdit(i)}
                                  ref={outRef}
                                >
                                  수정하기
                                </SelectButton>
                                <SelectButton>삭제하기</SelectButton>
                              </SelectBox>
                            </>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                  <div className={styles.author}>
                    <div className={styles.profileImg}>
                      <img
                        src={writer.image ? writer.image : profileDefaultImg}
                        onError={handleProfileError}
                        alt="프로필 이미지"
                      />
                    </div>
                    <div className={styles.authorContent}>
                      <p className={styles.nickName}>{writer.nickname}</p>
                      <p className={styles.date}>
                        {getTimeDiff(comment.updatedAt)}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>

        <div className={styles.btnCover}>
          <Link to="/items">
            <button type="button" className={styles.btnBack}>
              목록으로 돌아가기 <img src={btnBackImg} alt="<-" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InquiryRegister;
