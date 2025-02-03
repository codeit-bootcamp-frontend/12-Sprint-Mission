import React from "react";
import { Link, useParams } from "react-router-dom";
import ItemPageDescription from "./components/ItemPageDescription";
import style from "./ItemPage.module.scss";
import ItemComment from "./components/ItemComment";
import Comments from "./components/Comments";
import backBtn from "../../img/ic_back.svg";

function Itempage() {
  const { id } = useParams(); // URL에서 id 파라미터를 추출
  return (
    <div className={style.container}>
      <ItemPageDescription id={id} />
      <hr
        style={{
          marginTop: "40px",
          border: "1px solid,rgba(229, 231, 235, 1) ",
        }}
      />
      <ItemComment />
      <Comments id={id} />
      <Link className={style.link} to="/items">
        목록으로 돌아가기
        <img
          style={{ width: "19px", height: "26px" }}
          src={backBtn}
          alt="뒤로 가기"
        />
      </Link>
    </div>
  );
}

export default Itempage;
