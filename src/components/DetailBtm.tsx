import "./DetailBtm.css";
import menuIcon from "./../assets/menu_dot.svg";
import React, { useRef, useState } from "react";
import useApi from "./../hooks/useApi";
import ProfileBox from "./ProfileBox";
import CommentEmpty from "./../assets/comment_empty.png";
import useOutSideClick from "../hooks/useOutSideClick";
import Comment from "../types/Comment";

interface Props {
  id?: string;
}

const DetailBtm = ({ id }: Props) => {
  const [commentMenu, setCommentMenu] = useState<Props | null>(null);
  const [textValue, setTextValue] = useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
  };

  const handleCommentMenu = (id: Props) => {
    setCommentMenu((prev) => (prev === id ? null : id));
  };

  const menuRef = useRef(null);
  useOutSideClick(menuRef, () => setCommentMenu(null));

  const { data, loading, error } = useApi<Comment>(`${id}/comments?limit=10`);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="product_detail_comment">
      <div className="comment_top">
        <div className="tit">문의하기</div>
        <div className="textarea_box">
          <textarea
            className="inp_reset"
            name=""
            id=""
            onChange={handleTextChange}
            value={textValue}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."></textarea>
        </div>
        <button type="button" className="btn_blue sml" disabled={textValue !== "" ? false : true}>
          등록
        </button>
      </div>
      <ul className="comment_list">
        {data?.list?.length === 0 ? (
          <div className="comment_empty">
            <div className="thum">
              <img src={CommentEmpty} alt="아직 문의가 없어요 이미지" />
            </div>
            <p>아직 문의가 없어요</p>
          </div>
        ) : (
          data?.list.map((el) => {
            return (
              <li key={el.id}>
                <div className="comment_menu">
                  <button type="button" className="btn_reset" data-menu="button" onClick={() => handleCommentMenu(el.id as any)}>
                    {/* <button type="button" className="btn_reset" data-menu="button" onClick={() => handleCommentMenu({ id: String(el.id) })}> */}
                    <img src={menuIcon} alt="댓글 옵션 열고닫기" />
                  </button>
                  {commentMenu === el.id && (
                    <ul ref={menuRef}>
                      <li>
                        <button type="button" className="btn_reset">
                          수정하기
                        </button>
                      </li>
                      <li>
                        <button type="button" className="btn_reset">
                          삭제하기
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
                <div className="text_area">{el.content}</div>
                <ProfileBox img={el.writer.image} name={el.writer.nickname} date={el.updatedAt} />
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default DetailBtm;
