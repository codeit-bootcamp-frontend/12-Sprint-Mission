import menuIcon from "./../assets/menu_dot.svg";
import React, { useState } from "react";
import useApi from "./../hooks/useApi";
import ProfileBox from "./ProfileBox";

const DetailBtm = ({ id }) => {
  const [commentMenu, setCommentMenu] = useState(null);
  const [textValue, setTextValue] = useState("");

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };

  const handleCommentMenu = (id) => {
    setCommentMenu(commentMenu === id ? null : id);
  };

  const { data, loading, error } = useApi(`https://panda-market-api.vercel.app/products/${id}/comments?limit=10`);

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
        {data.list.map((el) => {
          return (
            <li key={el.id}>
              <div className="comment_menu">
                <button type="button" className="btn_reset" onClick={() => handleCommentMenu(el.id)}>
                  <img src={menuIcon} alt="" />
                </button>
                {commentMenu === el.id && (
                  <ul>
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
        })}
      </ul>
    </div>
  );
};

export default DetailBtm;
